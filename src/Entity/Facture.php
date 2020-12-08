<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\FactureRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass=FactureRepository::class)
 * @ApiResource(
 * subresourceOperations={
 *  "api_agences_factures_get_subresource"={
 *  "normalization_context"={"groups"="factures_subresource"}
 * }
 * },
 * normalizationContext={"groups"={"lecture_facture"}},
 * denormalizationContext={"disable_type_enforcement"=true}
 * )
 */
class Facture
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"lecture_facture", "factures_subresource"})
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     * @Groups({"lecture_facture", "factures_subresource"})
     * @Assert\NotBlank(message="Le montant de la facture est obligatoire")
     * @Assert\Type(type="numeric", message="Le montant de la facture doit être numérique")
     */
    private $montantFacture;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"lecture_facture", "factures_subresource"})
     * @Assert\NotBlank(message="Le numéro de la facture est obligatoire")
     * @Assert\Type(type="integer", message="Le numéro de la facture doit être un nombre")
     */
    private $numFacture;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $apercu;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_facture", "factures_subresource"})
     * @Assert\NotBlank(message="Le statut de la facture est obligatoire")
     * @Assert\Choice(choices={"SENT", "PAID", "CANCELLED"}, message="Le statut doit être SENT, PAID ou CANCELLED")
     */
    private $statutFacture;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"lecture_facture", "factures_subresource"})
     * @Assert\DateTime(message="La date doit être au format YYYY-MM-DD")
     * @Assert\NotBlank(message="La date d'envoi doit être renseignée")
     */
    private $envoyeLe;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"lecture_facture", "factures_subresource"})
     */
    private $modifieLe;

    /**
     * @ORM\ManyToOne(targetEntity=Agence::class, inversedBy="factures")
     * @Groups({"lecture_facture"})
     */
    private $agence;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class, inversedBy="factures")
     * @Groups({"lecture_facture"})
     */
    private $agent;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="factures")
     * @Assert\NotBlank(message="L'utilisateur est obligatoire")
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMontantFacture(): ?float
    {
        return $this->montantFacture;
    }

    public function setMontantFacture($montantFacture): self
    {
        $this->montantFacture = $montantFacture;

        return $this;
    }

    public function getNumFacture(): ?int
    {
        return $this->numFacture;
    }

    public function setNumFacture($numFacture): self
    {
        $this->numFacture = $numFacture;

        return $this;
    }

    public function getApercu(): ?string
    {
        return $this->apercu;
    }

    public function setApercu(?string $apercu): self
    {
        $this->apercu = $apercu;

        return $this;
    }

    public function getStatutFacture(): ?string
    {
        return $this->statutFacture;
    }

    public function setStatutFacture(string $statutFacture): self
    {
        $this->statutFacture = $statutFacture;

        return $this;
    }

    public function getEnvoyeLe(): ?\DateTimeInterface
    {
        return $this->envoyeLe;
    }

    public function setEnvoyeLe($envoyeLe): self
    {
        $this->envoyeLe = $envoyeLe;

        return $this;
    }

    public function getModifieLe(): ?\DateTimeInterface
    {
        return $this->modifieLe;
    }

    public function setModifieLe(?\DateTimeInterface $modifieLe): self
    {
        $this->modifieLe = $modifieLe;

        return $this;
    }

    public function getAgence(): ?Agence
    {
        return $this->agence;
    }

    public function setAgence(?Agence $agence): self
    {
        $this->agence = $agence;

        return $this;
    }

    public function getAgent(): ?Agent
    {
        return $this->agent;
    }

    public function setAgent(?Agent $agent): self
    {
        $this->agent = $agent;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
