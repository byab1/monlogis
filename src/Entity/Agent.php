<?php

namespace App\Entity;

use Cocur\Slugify\Slugify;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AgentRepository;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass=AgentRepository::class)
 * @ORM\HasLifecycleCallbacks
 * @ApiResource(
 * attributes={
 *      "pagination_enabled"=true,
 *      "pagination_items_per_page"=10
 * },
 * normalizationContext={"groups"={"lecture_agent"}}
 * )
 * @ApiFilter(SearchFilter::class, properties= {"nomAgent", "prenAgent"})
 * @ApiFilter(OrderFilter::class)
 */
class Agent
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="Le nom de l'agent est obligatoire")
     */
    private $nomAgent;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     */
    private $acredAgent;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="L'adresse de l'agent est obligatoire")
     */
    private $adrAgent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_agent"})
     */
    private $boitePostAgent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_agent"})
     */
    private $courielAgent;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="Le numéro de téléphone de l'agent est obligatoire")
     */
    private $telAgent;

    /**
     * @ORM\Column(type="integer", length=255)
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     */
    private $coteAgent;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     */
    private $photoAgent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_agent"})
     */
    private $requeteAgent;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     */
    private $dateInscAgent;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateResilAgent;

    /**
     * @ORM\OneToMany(targetEntity=Facture::class, mappedBy="agent")
     * @Groups({"lecture_agent"})
     * @ApiSubresource
     */
    private $factures;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="Le prénom de l'agent est obligatoire")
     */
    private $prenAgent;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agent", "lecture_propriete","lecture_facture"})
     * @Assert\NotBlank(message="L'adresse email ne doit pas être vide !")
     * @Assert\Email(message = "L'adresse email '{{ value }}' n'est pas valide.")
     */
    private $agentEmail;

    /**
     * @ORM\OneToMany(targetEntity=Propriete::class, mappedBy="agent")
     * @Groups({"lecture_agent"})
     * @ApiSubresource
     */
    private $proprietes;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_agent", "lecture_propriete"})
     */
    private $statutAgent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slugAgent;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="agent")
     * @Groups({"lecture_agent"})
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Package::class, inversedBy="agent")
     * @Groups({"lecture_agent"})
     * @Assert\NotBlank(message="L'agent doit avoir un package !")
     * 
     */
    private $package;


    /**
     * Permet d'initialiser le slug !
     * 
     * @ORM\PrePersist
     * @ORM\PreUpdate
     * 
     *
     * @return void
     */
    public function initializeSlug()
    {
        if (empty($this->slugAgent)) {
            $slugify = new Slugify();
            $this->slugAgent = $slugify->slugify($this->prenAgent);
        }
    }

    public function __construct()
    {
        $this->factures = new ArrayCollection();
        $this->packages = new ArrayCollection();
        $this->proprietes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomAgent(): ?string
    {
        return $this->nomAgent;
    }

    public function setNomAgent(string $nomAgent): self
    {
        $this->nomAgent = $nomAgent;

        return $this;
    }

    public function getAcredAgent(): ?string
    {
        return $this->acredAgent;
    }

    public function setAcredAgent(string $acredAgent): self
    {
        $this->acredAgent = $acredAgent;

        return $this;
    }

    public function getAdrAgent(): ?string
    {
        return $this->adrAgent;
    }

    public function setAdrAgent(string $adrAgent): self
    {
        $this->adrAgent = $adrAgent;

        return $this;
    }

    public function getBoitePostAgent(): ?string
    {
        return $this->boitePostAgent;
    }

    public function setBoitePostAgent(?string $boitePostAgent): self
    {
        $this->boitePostAgent = $boitePostAgent;

        return $this;
    }

    public function getCourielAgent(): ?string
    {
        return $this->courielAgent;
    }

    public function setCourielAgent(?string $courielAgent): self
    {
        $this->courielAgent = $courielAgent;

        return $this;
    }

    public function getTelAgent(): ?string
    {
        return $this->telAgent;
    }

    public function setTelAgent(string $telAgent): self
    {
        $this->telAgent = $telAgent;

        return $this;
    }

    public function getCoteAgent(): ?int
    {
        return $this->coteAgent;
    }

    public function setCoteAgent(int $coteAgent): self
    {
        $this->coteAgent = $coteAgent;

        return $this;
    }

    public function getPhotoAgent(): ?string
    {
        return $this->photoAgent;
    }

    public function setPhotoAgent(string $photoAgent): self
    {
        $this->photoAgent = $photoAgent;

        return $this;
    }

    public function getRequeteAgent(): ?string
    {
        return $this->requeteAgent;
    }

    public function setRequeteAgent(?string $requeteAgent): self
    {
        $this->requeteAgent = $requeteAgent;

        return $this;
    }

    public function getDateInscAgent(): ?\DateTimeInterface
    {
        return $this->dateInscAgent;
    }

    public function setDateInscAgent(\DateTimeInterface $dateInscAgent): self
    {
        $this->dateInscAgent = $dateInscAgent;

        return $this;
    }

    public function getDateResilAgent(): ?\DateTimeInterface
    {
        return $this->dateResilAgent;
    }

    public function setDateResilAgent(?\DateTimeInterface $dateResilAgent): self
    {
        $this->dateResilAgent = $dateResilAgent;

        return $this;
    }

    /**
     * @return Collection|Facture[]
     */
    public function getFactures(): Collection
    {
        return $this->factures;
    }

    public function addFacture(Facture $facture): self
    {
        if (!$this->factures->contains($facture)) {
            $this->factures[] = $facture;
            $facture->setAgent($this);
        }

        return $this;
    }

    public function removeFacture(Facture $facture): self
    {
        if ($this->factures->removeElement($facture)) {
            // set the owning side to null (unless already changed)
            if ($facture->getAgent() === $this) {
                $facture->setAgent(null);
            }
        }

        return $this;
    }

    public function getPrenAgent(): ?string
    {
        return $this->prenAgent;
    }

    public function setPrenAgent(string $prenAgent): self
    {
        $this->prenAgent = $prenAgent;

        return $this;
    }

    public function getAgentEmail(): ?string
    {
        return $this->agentEmail;
    }

    public function setAgentEmail(string $agentEmail): self
    {
        $this->agentEmail = $agentEmail;

        return $this;
    }

    /**
     * @return Collection|Propriete[]
     */
    public function getProprietes(): Collection
    {
        return $this->proprietes;
    }

    public function addPropriete(Propriete $propriete): self
    {
        if (!$this->proprietes->contains($propriete)) {
            $this->proprietes[] = $propriete;
            $propriete->setAgent($this);
        }

        return $this;
    }

    public function removePropriete(Propriete $propriete): self
    {
        if ($this->proprietes->removeElement($propriete)) {
            // set the owning side to null (unless already changed)
            if ($propriete->getAgent() === $this) {
                $propriete->setAgent(null);
            }
        }

        return $this;
    }

    public function getStatutAgent(): ?string
    {
        return $this->statutAgent;
    }

    public function setStatutAgent(string $statutAgent): self
    {
        $this->statutAgent = $statutAgent;

        return $this;
    }

    public function getSlugAgent(): ?string
    {
        return $this->slugAgent;
    }

    public function setSlugAgent(string $slugAgent): self
    {
        $this->slugAgent = $slugAgent;

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

    public function getPackage(): ?Package
    {
        return $this->package;
    }

    public function setPackage(?Package $package): self
    {
        $this->package = $package;

        return $this;
    }
}
