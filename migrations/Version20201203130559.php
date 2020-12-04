<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201203130559 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agence ADD mdp_agence VARCHAR(255) NOT NULL, ADD slug_agence VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE agent ADD mdp_agent VARCHAR(255) NOT NULL, ADD slug_agent VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE facture DROP supprime_le');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agence DROP mdp_agence, DROP slug_agence');
        $this->addSql('ALTER TABLE agent DROP mdp_agent, DROP slug_agent');
        $this->addSql('ALTER TABLE facture ADD supprime_le DATETIME DEFAULT NULL');
    }
}
