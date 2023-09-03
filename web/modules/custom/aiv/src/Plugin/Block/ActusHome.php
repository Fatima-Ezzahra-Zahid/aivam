<?php
/**
 * Created by PhpStorm.
 * User: f.elhalafi
 * Date: 13/11/2019
 * Time: 10:01
 */

namespace Drupal\aiv\Plugin\Block;


use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;

/**
 * Provides a 'Actualités HomePage' Block.
 *
 * @Block(
 *   id = "Actus homepage",
 *   admin_label = @Translation("Actualités HomePage"),
 *   category = @Translation("AIV"),
 * )
 */
class ActusHome extends BlockBase
{
    public function build()
    {
        $query = \Drupal::entityQuery('node')
            ->condition('status', 1)
            ->condition('promote', 1)
            ->condition('type', 'actualite')
            ->sort('created', 'DESC')
            ->range(0, 3);
        $nids = $query->execute();/*TODO*/
        $nodes = Node::loadMultiple($nids);

        foreach ($nodes as $item) {
            $style = \Drupal::entityTypeManager()->getStorage('image_style')->load('actus_detail_hp');
            $url = $style->buildUrl($item->field_image_detail_hp->referencedEntities()[0]->getFileUri());

            $data[date("d F Y", strtotime($item->field_date_actus->value))][] = [
                'title' => $item->title->value,
                'nid' => $item->nid->value,
                'image' => file_create_url($item->field_image_detail_hp->referencedEntities()[0]->getFileUri()),
                'body' => $item->body->summary
            ];
        }

        return array(
            '#theme' => 'theme_actus_home',
            '#cache' => ['max-age' => 0],
            '#data' => ['items' => $data, 'settings' => $this->configuration]
        );
    }

    public function defaultConfiguration()
    {
        return [
                'text_descriptive' => t('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
                'title_all_news' => t('Voir toutes les actualités')
            ] + parent::defaultConfiguration();
    }

    public function blockForm($form, FormStateInterface $form_state)
    {
        $form['text_descriptive'] = [
            '#type' => 'text_format',
            '#title' => $this->t('Description'),
            '#description' => t('Text descriptive for news block'),
            '#default_value' => isset($this->configuration['text_descriptive']) ? $this->configuration['text_descriptive']['value'] : '',
            '#format' => 'full_html',
        ];
        $form['title_all_news'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Show all news'),
            '#description' => t('Title of boutton to show all news'),
            '#default_value' => $this->configuration['title_all_news']
        ];

        return $form;
    }

    public function blockSubmit($form, FormStateInterface $form_state)
    {
        $this->configuration['text_descriptive'] = $form_state->getValue('text_descriptive');
        $this->configuration['title_all_news'] = $form_state->getValue('title_all_news');
        parent::blockSubmit($form, $form_state);
    }
}