<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201126094548 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE agence (id INT AUTO_INCREMENT NOT NULL, adresse VARCHAR(255) NOT NULL, acreditation VARCHAR(255) NOT NULL, status VARCHAR(255) NOT NULL, cote VARCHAR(255) NOT NULL, tel VARCHAR(255) NOT NULL, site_web VARCHAR(255) DEFAULT NULL, permis_construire VARCHAR(255) NOT NULL, couriel VARCHAR(255) NOT NULL, boite_postal VARCHAR(255) NOT NULL, logo VARCHAR(255) NOT NULL, badge VARCHAR(255) NOT NULL, date_inscription DATETIME NOT NULL, date_resiliation DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE agence');
    }
}
