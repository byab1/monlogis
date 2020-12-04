<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201202144549 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agence DROP FOREIGN KEY FK_64C19AA918566CAF');
        $this->addSql('DROP INDEX IDX_64C19AA918566CAF ON agence');
        $this->addSql('ALTER TABLE agence ADD agence_email VARCHAR(255) NOT NULL, DROP propriete_id, CHANGE date_inscription date_inscription DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE agent DROP FOREIGN KEY FK_268B9C9D18566CAF');
        $this->addSql('ALTER TABLE agent DROP FOREIGN KEY FK_268B9C9DF44CABFF');
        $this->addSql('DROP INDEX IDX_268B9C9D18566CAF ON agent');
        $this->addSql('DROP INDEX IDX_268B9C9DF44CABFF ON agent');
        $this->addSql('ALTER TABLE agent ADD pren_agent VARCHAR(255) NOT NULL, ADD agent_email VARCHAR(255) NOT NULL, DROP propriete_id, DROP package_id, DROP mdp, DROP badge_agent, DROP prenom_agent, CHANGE date_insc_agent date_insc_agent DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE commodite ADD propriete_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE commodite ADD CONSTRAINT FK_4A8C733B18566CAF FOREIGN KEY (propriete_id) REFERENCES propriete (id)');
        $this->addSql('CREATE INDEX IDX_4A8C733B18566CAF ON commodite (propriete_id)');
        $this->addSql('ALTER TABLE galerie ADD propriete_id INT DEFAULT NULL, ADD url VARCHAR(255) NOT NULL, ADD caption VARCHAR(255) NOT NULL, DROP nom_galerie, DROP date_creation, DROP date_supp, DROP image_vogue, DROP galerie_img');
        $this->addSql('ALTER TABLE galerie ADD CONSTRAINT FK_9E7D159018566CAF FOREIGN KEY (propriete_id) REFERENCES propriete (id)');
        $this->addSql('CREATE INDEX IDX_9E7D159018566CAF ON galerie (propriete_id)');
        $this->addSql('ALTER TABLE package ADD agence_id INT DEFAULT NULL, ADD agent_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE package ADD CONSTRAINT FK_DE686795D725330D FOREIGN KEY (agence_id) REFERENCES agence (id)');
        $this->addSql('ALTER TABLE package ADD CONSTRAINT FK_DE6867953414710B FOREIGN KEY (agent_id) REFERENCES agent (id)');
        $this->addSql('CREATE INDEX IDX_DE686795D725330D ON package (agence_id)');
        $this->addSql('CREATE INDEX IDX_DE6867953414710B ON package (agent_id)');
        $this->addSql('ALTER TABLE propriete DROP FOREIGN KEY FK_73A85B93825396CB');
        $this->addSql('ALTER TABLE propriete DROP FOREIGN KEY FK_73A85B93AE632A35');
        $this->addSql('DROP INDEX IDX_73A85B93825396CB ON propriete');
        $this->addSql('DROP INDEX IDX_73A85B93AE632A35 ON propriete');
        $this->addSql('ALTER TABLE propriete ADD agence_id INT DEFAULT NULL, ADD agent_id INT DEFAULT NULL, DROP galerie_id, DROP commodite_id, CHANGE date_ajout date_ajout DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE propriete ADD CONSTRAINT FK_73A85B93D725330D FOREIGN KEY (agence_id) REFERENCES agence (id)');
        $this->addSql('ALTER TABLE propriete ADD CONSTRAINT FK_73A85B933414710B FOREIGN KEY (agent_id) REFERENCES agent (id)');
        $this->addSql('CREATE INDEX IDX_73A85B93D725330D ON propriete (agence_id)');
        $this->addSql('CREATE INDEX IDX_73A85B933414710B ON propriete (agent_id)');
        $this->addSql('ALTER TABLE type_package ADD nom_type_package VARCHAR(255) NOT NULL, DROP gratuit, DROP standard, DROP premium, DROP business, DROP sur_mesure');
        $this->addSql('ALTER TABLE type_propriete ADD nom_type VARCHAR(255) NOT NULL, DROP appart, DROP boutique, DROP entrepot, DROP ferme, DROP lavage_auto, DROP maison, DROP terrain, DROP villa');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agence ADD propriete_id INT NOT NULL, DROP agence_email, CHANGE date_inscription date_inscription DATETIME NOT NULL');
        $this->addSql('ALTER TABLE agence ADD CONSTRAINT FK_64C19AA918566CAF FOREIGN KEY (propriete_id) REFERENCES propriete (id)');
        $this->addSql('CREATE INDEX IDX_64C19AA918566CAF ON agence (propriete_id)');
        $this->addSql('ALTER TABLE agent ADD propriete_id INT DEFAULT NULL, ADD package_id INT NOT NULL, ADD mdp VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD badge_agent VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD prenom_agent VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP pren_agent, DROP agent_email, CHANGE date_insc_agent date_insc_agent DATETIME NOT NULL');
        $this->addSql('ALTER TABLE agent ADD CONSTRAINT FK_268B9C9D18566CAF FOREIGN KEY (propriete_id) REFERENCES propriete (id)');
        $this->addSql('ALTER TABLE agent ADD CONSTRAINT FK_268B9C9DF44CABFF FOREIGN KEY (package_id) REFERENCES package (id)');
        $this->addSql('CREATE INDEX IDX_268B9C9D18566CAF ON agent (propriete_id)');
        $this->addSql('CREATE INDEX IDX_268B9C9DF44CABFF ON agent (package_id)');
        $this->addSql('ALTER TABLE commodite DROP FOREIGN KEY FK_4A8C733B18566CAF');
        $this->addSql('DROP INDEX IDX_4A8C733B18566CAF ON commodite');
        $this->addSql('ALTER TABLE commodite DROP propriete_id');
        $this->addSql('ALTER TABLE galerie DROP FOREIGN KEY FK_9E7D159018566CAF');
        $this->addSql('DROP INDEX IDX_9E7D159018566CAF ON galerie');
        $this->addSql('ALTER TABLE galerie ADD nom_galerie VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD date_creation DATETIME NOT NULL, ADD date_supp DATETIME NOT NULL, ADD image_vogue VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD galerie_img VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP propriete_id, DROP url, DROP caption');
        $this->addSql('ALTER TABLE package DROP FOREIGN KEY FK_DE686795D725330D');
        $this->addSql('ALTER TABLE package DROP FOREIGN KEY FK_DE6867953414710B');
        $this->addSql('DROP INDEX IDX_DE686795D725330D ON package');
        $this->addSql('DROP INDEX IDX_DE6867953414710B ON package');
        $this->addSql('ALTER TABLE package DROP agence_id, DROP agent_id');
        $this->addSql('ALTER TABLE propriete DROP FOREIGN KEY FK_73A85B93D725330D');
        $this->addSql('ALTER TABLE propriete DROP FOREIGN KEY FK_73A85B933414710B');
        $this->addSql('DROP INDEX IDX_73A85B93D725330D ON propriete');
        $this->addSql('DROP INDEX IDX_73A85B933414710B ON propriete');
        $this->addSql('ALTER TABLE propriete ADD galerie_id INT DEFAULT NULL, ADD commodite_id INT DEFAULT NULL, DROP agence_id, DROP agent_id, CHANGE date_ajout date_ajout DATETIME NOT NULL');
        $this->addSql('ALTER TABLE propriete ADD CONSTRAINT FK_73A85B93825396CB FOREIGN KEY (galerie_id) REFERENCES galerie (id)');
        $this->addSql('ALTER TABLE propriete ADD CONSTRAINT FK_73A85B93AE632A35 FOREIGN KEY (commodite_id) REFERENCES commodite (id)');
        $this->addSql('CREATE INDEX IDX_73A85B93825396CB ON propriete (galerie_id)');
        $this->addSql('CREATE INDEX IDX_73A85B93AE632A35 ON propriete (commodite_id)');
        $this->addSql('ALTER TABLE type_package ADD gratuit VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD standard VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD premium VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD business VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD sur_mesure VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, DROP nom_type_package');
        $this->addSql('ALTER TABLE type_propriete ADD boutique VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD entrepot VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD ferme VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD lavage_auto VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD maison VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD terrain VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD villa VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE nom_type appart VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
