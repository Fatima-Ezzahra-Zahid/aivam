<?php
/**
 * Created by PhpStorm.
 * User: f.elhalafi
 * Date: 13/11/2019
 * Time: 17:30
 */

namespace Drupal\aiv\Plugin\Block;


use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;
use Drupal\paragraphs\Entity\Paragraph;

/**
 * Provides a 'Galeries HomePage' Block.
 *
 * @Block(
 *   id = "Galeries homepage",
 *   admin_label = @Translation("Galeries HomePage"),
 *   category = @Translation("AIV"),
 * )
 */
class GaleriesHome extends BlockBase
{
    public function build()
    {
        $query = \Drupal::entityQuery('node')
            ->condition('status', 1)
            ->condition('type', 'galeries')
            ->sort('title', 'DESC')
            ->range(0, 1);
        $nids = $query->execute();
        $results = Node::load(reset($nids));


        $query = \Drupal::entityQuery('node')
            ->condition('status', 1)
            ->condition('type', 'galeries')
            ->sort('title', 'DESC');
        $nids = $query->execute();
        $nodes = Node::loadMultiple($nids);

        foreach ($nodes as $item) {
            $items = $item->field_galerie->getValue();
            foreach ($items as $galerie) {
                $paragraph = Paragraph::load($galerie['target_id']);
                if ($paragraph->field_booleen->value) {
                    $data[$item->nid->value] = [
                        'title' => $item->title->value
                    ];
                }
            }
        }

        return array(
            '#theme' => 'theme_galeries_home',
            '#cache' => ['max-age' => 0],
            '#data' => ['item' => $results, 'settings' => $this->configuration, "data" => $data],
            '#attached' => array(
                'library' => array(
                    'aiv/script-galerie'
                )
            )
        );
    }

    public function defaultConfiguration()
    {
        return [
                'title_view_all' => t('Voir toutes les photos')
            ] + parent::defaultConfiguration();
    }

    public function blockForm($form, FormStateInterface $form_state)
    {
        $form['title_view_all'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Show details'),
            '#description' => t('Title of boutton to show details'),
            '#default_value' => $this->configuration['title_view_all']
        ];

        return $form;
    }

    public function blockSubmit($form, FormStateInterface $form_state)
    {
        $this->configuration['title_view_all'] = $form_state->getValue('title_view_all');
        parent::blockSubmit($form, $form_state);
    }
}