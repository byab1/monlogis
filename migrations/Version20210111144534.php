<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210111144534 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE propriete DROP FOREIGN KEY FK_73A85B939F15D6AA');
        $this->addSql('DROP TABLE type_propriete');
        $this->addSql('DROP INDEX IDX_73A85B939F15D6AA ON propriete');
        $this->addSql('ALTER TABLE propriete ADD type VARCHAR(255) NOT NULL, DROP type_propriete_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE type_propriete (id INT AUTO_INCREMENT NOT NULL, nom_type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE propriete ADD type_propriete_id INT DEFAULT NULL, DROP type');
        $this->addSql('ALTER TABLE propriete ADD CONSTRAINT FK_73A85B939F15D6AA FOREIGN KEY (type_propriete_id) REFERENCES type_propriete (id)');
        $this->addSql('CREATE INDEX IDX_73A85B939F15D6AA ON propriete (type_propriete_id)');
    }
}
