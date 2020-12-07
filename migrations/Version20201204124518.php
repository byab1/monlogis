<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201204124518 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agence ADD package_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE agence ADD CONSTRAINT FK_64C19AA9F44CABFF FOREIGN KEY (package_id) REFERENCES package (id)');
        $this->addSql('CREATE INDEX IDX_64C19AA9F44CABFF ON agence (package_id)');
        $this->addSql('ALTER TABLE agent ADD package_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE agent ADD CONSTRAINT FK_268B9C9DF44CABFF FOREIGN KEY (package_id) REFERENCES package (id)');
        $this->addSql('CREATE INDEX IDX_268B9C9DF44CABFF ON agent (package_id)');
        $this->addSql('ALTER TABLE package DROP FOREIGN KEY FK_DE6867953414710B');
        $this->addSql('ALTER TABLE package DROP FOREIGN KEY FK_DE686795D725330D');
        $this->addSql('DROP INDEX IDX_DE6867953414710B ON package');
        $this->addSql('DROP INDEX IDX_DE686795D725330D ON package');
        $this->addSql('ALTER TABLE package DROP agence_id, DROP agent_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agence DROP FOREIGN KEY FK_64C19AA9F44CABFF');
        $this->addSql('DROP INDEX IDX_64C19AA9F44CABFF ON agence');
        $this->addSql('ALTER TABLE agence DROP package_id');
        $this->addSql('ALTER TABLE agent DROP FOREIGN KEY FK_268B9C9DF44CABFF');
        $this->addSql('DROP INDEX IDX_268B9C9DF44CABFF ON agent');
        $this->addSql('ALTER TABLE agent DROP package_id');
        $this->addSql('ALTER TABLE package ADD agence_id INT DEFAULT NULL, ADD agent_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE package ADD CONSTRAINT FK_DE6867953414710B FOREIGN KEY (agent_id) REFERENCES agent (id)');
        $this->addSql('ALTER TABLE package ADD CONSTRAINT FK_DE686795D725330D FOREIGN KEY (agence_id) REFERENCES agence (id)');
        $this->addSql('CREATE INDEX IDX_DE6867953414710B ON package (agent_id)');
        $this->addSql('CREATE INDEX IDX_DE686795D725330D ON package (agence_id)');
    }
}
