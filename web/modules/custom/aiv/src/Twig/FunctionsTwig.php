<?php
/**
 * Created by PhpStorm.
 * User: f.elhalafi
 * Date: 13/11/2019
 * Time: 17:01
 */

namespace Drupal\aiv\Twig;


use Drupal\node\Entity\Node;
use Drupal\paragraphs\Entity\Paragraph;

class FunctionsTwig extends \Twig_Extension
{
    /**
     * Unique identifier for this Twig extension
     */
    public function getName()
    {
        return 'functions_twig';
    }

    /**
     * List of all Twig functions
     */
    public function getFunctions()
    {
        return array(
            new \Twig_SimpleFunction('printBlock',
                array($this, 'printBlock'),
                array('is_safe' => array('html')
                )),
            new \Twig_SimpleFunction('theme_get_setting',
                array($this, 'theme_get_setting'),
                array('is_safe' => array('html')
                )),
            new \Twig_SimpleFunction('paragraphLoad',
                array($this, 'paragraphLoad'),
                array('is_safe' => array('html')
                )),
            new \Twig_SimpleFunction('getOthersGaleries',
                array($this, 'getOthersGaleries'),
                array('is_safe' => array('html')
                )),
            new \Twig_SimpleFunction('getItemMenu',
                array($this, 'getItemMenu'),
                array('is_safe' => array('html')
                ))
        );
    }

    /**
     * get block content
     *
     * @param $blockName
     * @return mixed
     */
    public function printBlock($blockName)
    {
        $block = \Drupal\block\Entity\Block::load($blockName);
        $block_content = \Drupal::entityTypeManager()
            ->getViewBuilder('block')
            ->view($block);
        return $block_content;
    }

    /**
     * Retrieves a setting for the current theme
     *
     * @param $name
     * @return mixed
     */
    public function theme_get_setting($name)
    {
        return theme_get_setting($name, 'aivam');
    }

    /**
     * Load paragraph for twig templating
     *
     * @param $id
     * @return \Drupal\Core\Entity\EntityInterface|null|static
     */
    public function paragraphLoad($id)
    {
        return Paragraph::load($id);
    }

    /**
     * Load paragraph for twig templating
     *
     * @param $id
     * @return \Drupal\Core\Entity\EntityInterface|null|static
     */
    public function getOthersGaleries($id)
    {
        $query = \Drupal::entityQuery('node')
            ->condition('status', 1)
            ->condition('type', 'galeries')
            ->condition('nid', $id, '<>');
        $nids = $query->execute();
        $nodes = Node::loadMultiple($nids);
        return $nodes;
    }

    /**
     * Get menu tree
     * @param $menu_name
     * @return array
     */
    public function getItemMenu($menu_name, $child = false)
    {
        $data = \Drupal::menuTree()->load($menu_name, new \Drupal\Core\Menu\MenuTreeParameters());
        $tree = [];
        foreach ($data as $key => $item) {
            if (!$item->subtree && $item->link->isEnabled() && !$child) {
                $tree['name'] = $item->link->link_title;
                $tree[$key] = [
                    'title' => $item->link->getTitle(),
                    'url' => $item->link->getUrlObject()->toString(),
                ];
            } elseif ($item->subtree && $child) {
                $tree['name'] = $item->link->getTitle();
                foreach ($item->subtree as $key => $item) {
                    $tree[$key] = [
                        'title' => $item->link->getTitle(),
                        'url' => $item->link->getUrlObject()->toString(),
                    ];
                }
            }
        }
        return $tree;
    }
}