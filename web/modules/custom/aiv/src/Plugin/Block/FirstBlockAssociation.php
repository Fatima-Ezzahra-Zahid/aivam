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
 * Provides a 'First Block Association' Block.
 *
 * @Block(
 *   id = "First Block Association",
 *   admin_label = @Translation("First Block Association"),
 *   category = @Translation("AIV"),
 * )
 */
class FirstBlockAssociation extends BlockBase
{
    public function build()
    {
        return array(
            '#theme' => 'theme_first_block_association',
            '#cache' => ['max-age' => 0]
        );
    }
}