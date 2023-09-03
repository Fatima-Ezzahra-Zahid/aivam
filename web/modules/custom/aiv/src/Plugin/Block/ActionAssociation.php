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
use Drupal\views\Views;

/**
 * Provides a 'Action Association' Block.
 *
 * @Block(
 *   id = "Action association",
 *   admin_label = @Translation("Action Association"),
 *   category = @Translation("AIV"),
 * )
 */
class ActionAssociation extends BlockBase
{
    public function build()
    {

        /*$view = Views::getView('action');

        if (is_object($view)) {
            $view->setDisplay('block_1');
            $view->execute();

            // Render the view
            $result = \Drupal::service('renderer')->render($view->render());
        }
        $viewd = \Drupal::service('renderer')->render(views_embed_view('action', 'block_1'));
        die(var_dump($result, $viewd, $view->buildRenderable()));*/
        $query = \Drupal::entityQuery('node')
            ->condition('status', 1)
            ->condition('type', 'actions_et_feuille_de_route')
            ->sort('field_date_action', 'DESC');
        $nids = $query->execute();/*TODO*/
        $nodes = Node::loadMultiple($nids);

        foreach ($nodes as $item) {
            $data[date("d M", strtotime($item->field_date_action->value))][] = [
                'title' => $item->title->value,
                'nid' => $item->nid->value,
                'date' => date("d F Y", strtotime($item->field_date_action->value)),
                'image' => file_create_url($item->field_image_action->referencedEntities()[0]->getFileUri()),
                'body' => $item->body->summary
            ];
        }

        return array(
            '#theme' => 'theme_action_association',
            '#cache' => ['max-age' => 0],
            '#data' => ['items' => $data, 'settings' => $this->configuration]
        );
    }

    public function defaultConfiguration()
    {
        return [
                'text_descriptive' => t('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.')
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

        return $form;
    }

    public function blockSubmit($form, FormStateInterface $form_state)
    {
        $this->configuration['text_descriptive'] = $form_state->getValue('text_descriptive');
        parent::blockSubmit($form, $form_state);
    }
}