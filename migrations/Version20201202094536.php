<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201202094536 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE agent (id INT AUTO_INCREMENT NOT NULL, propriete_id INT DEFAULT NULL, package_id INT NOT NULL, nom_agent VARCHAR(255) NOT NULL, acred_agent VARCHAR(255) NOT NULL, mdp VARCHAR(255) NOT NULL, adr_agent VARCHAR(255) NOT NULL, boite_post_agent VARCHAR(255) DEFAULT NULL, couriel_agent VARCHAR(255) DEFAULT NULL, tel_agent VARCHAR(255) NOT NULL, cote_agent VARCHAR(255) NOT NULL, statut_agent VARCHAR(255) NOT NULL, badge_agent VARCHAR(255) DEFAULT NULL, photo_agent VARCHAR(255) NOT NULL, requete_agent VARCHAR(255) DEFAULT NULL, date_insc_agent DATETIME NOT NULL, date_resil_agent DATETIME DEFAULT NULL, prenom_agent VARCHAR(255) NOT NULL, INDEX IDX_268B9C9D18566CAF (propriete_id), INDEX IDX_268B9C9DF44CABFF (package_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commodite (id INT AUTO_INCREMENT NOT NULL, nb_piece INT NOT NULL, salle_eau INT NOT NULL, piscine VARCHAR(255) DEFAULT NULL, panneau_sol VARCHAR(255) DEFAULT NULL, garage VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE facture (id INT AUTO_INCREMENT NOT NULL, agence_id INT DEFAULT NULL, agent_id INT DEFAULT NULL, montant_facture DOUBLE PRECISION NOT NULL, num_facture INT NOT NULL, apercu VARCHAR(255) DEFAULT NULL, statut_facture VARCHAR(255) NOT NULL, envoye_le DATETIME NOT NULL, modifie_le DATETIME DEFAULT NULL, supprime_le DATETIME DEFAULT NULL, INDEX IDX_FE866410D725330D (agence_id), INDEX IDX_FE8664103414710B (agent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE package (id INT AUTO_INCREMENT NOT NULL, type_package_id INT DEFAULT NULL, nom_package VARCHAR(255) NOT NULL, prix_package DOUBLE PRECISION NOT NULL, date_expiration DATETIME NOT NULL, nbr_propriete INT NOT NULL, nb_vedet_prop INT NOT NULL, des_prop VARCHAR(255) NOT NULL, etat TINYINT(1) NOT NULL, INDEX IDX_DE686795E94F7DDA (type_package_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE propriete (id INT AUTO_INCREMENT NOT NULL, galerie_id INT DEFAULT NULL, commodite_id INT DEFAULT NULL, type_propriete_id INT DEFAULT NULL, nom_propriete VARCHAR(255) NOT NULL, des_propriete VARCHAR(255) NOT NULL, prix_propriete DOUBLE PRECISION NOT NULL, adr_propriete VARCHAR(255) NOT NULL, localisation VARCHAR(255) NOT NULL, district VARCHAR(255) DEFAULT NULL, ville VARCHAR(255) NOT NULL, etat_propriete TINYINT(1) NOT NULL, commune VARCHAR(255) DEFAULT NULL, date_ajout DATETIME NOT NULL, date_sup_propriete DATETIME DEFAULT NULL, date_modif_propriete DATETIME DEFAULT NULL, superficie VARCHAR(255) NOT NULL, statut VARCHAR(255) NOT NULL, photo_propriete VARCHAR(255) NOT NULL, video VARCHAR(255) DEFAULT NULL, tour_virtuel VARCHAR(255) DEFAULT NULL, walkscore VARCHAR(255) DEFAULT NULL, requete VARCHAR(255) DEFAULT NULL, vues INT DEFAULT NULL, INDEX IDX_73A85B93825396CB (galerie_id), INDEX IDX_73A85B93AE632A35 (commodite_id), INDEX IDX_73A85B939F15D6AA (type_propriete_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_package (id INT AUTO_INCREMENT NOT NULL, gratuit VARCHAR(255) DEFAULT NULL, standard VARCHAR(255) DEFAULT NULL, premium VARCHAR(255) DEFAULT NULL, business VARCHAR(255) DEFAULT NULL, sur_mesure VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_propriete (id INT AUTO_INCREMENT NOT NULL, appart VARCHAR(255) NOT NULL, boutique VARCHAR(255) NOT NULL, entrepot VARCHAR(255) NOT NULL, ferme VARCHAR(255) NOT NULL, lavage_auto VARCHAR(255) NOT NULL, maison VARCHAR(255) NOT NULL, terrain VARCHAR(255) NOT NULL, villa VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE agent ADD CONSTRAINT FK_268B9C9D18566CAF FOREIGN KEY (propriete_id) REFERENCES propriete (id)');
        $this->addSql('ALTER TABLE agent ADD CONSTRAINT FK_268B9C9DF44CABFF FOREIGN KEY (package_id) REFERENCES package (id)');
        $this->addSql('ALTER TABLE facture ADD CONSTRAINT FK_FE866410D725330D FOREIGN KEY (agence_id) REFERENCES agence (id)');
        $this->addSql('ALTER TABLE facture ADD CONSTRAINT FK_FE8664103414710B FOREIGN KEY (agent_id) REFERENCES agent (id)');
        $this->addSql('ALTER TABLE package ADD CONSTRAINT FK_DE686795E94F7DDA FOREIGN KEY (type_package_id) REFERENCES type_package (id)');
        $this->addSql('ALTER TABLE propriete ADD CONSTRAINT FK_73A85B93825396CB FOREIGN KEY (galerie_id) REFERENCES galerie (id)');
        $this->addSql('ALTER TABLE propriete ADD CONSTRAINT FK_73A85B93AE632A35 FOREIGN KEY (commodite_id) REFERENCES commodite (id)');
        $this->addSql('ALTER TABLE propriete ADD CONSTRAINT FK_73A85B939F15D6AA FOREIGN KEY (type_propriete_id) REFERENCES type_propriete (id)');
        $this->addSql('ALTER TABLE agence ADD propriete_id INT NOT NULL, ADD package_id INT DEFAULT NULL, DROP badge, CHANGE permis_construire permis_construire VARCHAR(255) DEFAULT NULL, CHANGE date_resiliation date_resiliation DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE agence ADD CONSTRAINT FK_64C19AA918566CAF FOREIGN KEY (propriete_id) REFERENCES propriete (id)');
        $this->addSql('ALTER TABLE agence ADD CONSTRAINT FK_64C19AA9F44CABFF FOREIGN KEY (package_id) REFERENCES package (id)');
        $this->addSql('CREATE INDEX IDX_64C19AA918566CAF ON agence (propriete_id)');
        $this->addSql('CREATE INDEX IDX_64C19AA9F44CABFF ON agence (package_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE facture DROP FOREIGN KEY FK_FE8664103414710B');
        $this->addSql('ALTER TABLE propriete DROP FOREIGN KEY FK_73A85B93AE632A35');
        $this->addSql('ALTER TABLE agence DROP FOREIGN KEY FK_64C19AA9F44CABFF');
        $this->addSql('ALTER TABLE agent DROP FOREIGN KEY FK_268B9C9DF44CABFF');
        $this->addSql('ALTER TABLE agence DROP FOREIGN KEY FK_64C19AA918566CAF');
        $this->addSql('ALTER TABLE agent DROP FOREIGN KEY FK_268B9C9D18566CAF');
        $this->addSql('ALTER TABLE package DROP FOREIGN KEY FK_DE686795E94F7DDA');
        $this->addSql('ALTER TABLE propriete DROP FOREIGN KEY FK_73A85B939F15D6AA');
        $this->addSql('DROP TABLE agent');
        $this->addSql('DROP TABLE commodite');
        $this->addSql('DROP TABLE facture');
        $this->addSql('DROP TABLE package');
        $this->addSql('DROP TABLE propriete');
        $this->addSql('DROP TABLE type_package');
        $this->addSql('DROP TABLE type_propriete');
        $this->addSql('DROP INDEX IDX_64C19AA918566CAF ON agence');
        $this->addSql('DROP INDEX IDX_64C19AA9F44CABFF ON agence');
        $this->addSql('ALTER TABLE agence ADD badge VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP propriete_id, DROP package_id, CHANGE permis_construire permis_construire VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE date_resiliation date_resiliation DATETIME NOT NULL');
    }
}
