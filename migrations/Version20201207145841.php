<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201207145841 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agent CHANGE cote_agent cote_agent INT NOT NULL');
        $this->addSql('ALTER TABLE propriete ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE propriete ADD CONSTRAINT FK_73A85B93A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_73A85B93A76ED395 ON propriete (user_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agent CHANGE cote_agent cote_agent VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE propriete DROP FOREIGN KEY FK_73A85B93A76ED395');
        $this->addSql('DROP INDEX IDX_73A85B93A76ED395 ON propriete');
        $this->addSql('ALTER TABLE propriete DROP user_id');
    }
}
