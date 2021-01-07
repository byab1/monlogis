<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201210171242 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE commodite');
        $this->addSql('ALTER TABLE propriete ADD nbr_piece INT NOT NULL, ADD salle_eau INT NOT NULL, ADD piscine VARCHAR(255) DEFAULT NULL, ADD spa VARCHAR(255) DEFAULT NULL, ADD panneau_solaire VARCHAR(255) DEFAULT NULL, ADD garage VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE commodite (id INT AUTO_INCREMENT NOT NULL, propriete_id INT DEFAULT NULL, nb_piece INT NOT NULL, salle_eau INT NOT NULL, piscine VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, panneau_sol VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, garage VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_4A8C733B18566CAF (propriete_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE commodite ADD CONSTRAINT FK_4A8C733B18566CAF FOREIGN KEY (propriete_id) REFERENCES propriete (id)');
        $this->addSql('ALTER TABLE propriete DROP nbr_piece, DROP salle_eau, DROP piscine, DROP spa, DROP panneau_solaire, DROP garage');
    }
}
