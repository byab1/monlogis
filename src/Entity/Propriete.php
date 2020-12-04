<?php

namespace App\Entity;

use App\Repository\ProprieteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProprieteRepository::class)
 */
class Propriete
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomPropriete;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $desPropriete;

    /**
     * @ORM\Column(type="float")
     */
    private $prixPropriete;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adrPropriete;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $localisation;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $district;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ville;

    /**
     * @ORM\Column(type="boolean")
     */
    private $etatPropriete;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $commune;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateAjout;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateModifPropriete;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $superficie;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $statut;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $photoPropriete;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $video;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tourVirtuel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $walkscore;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $requete;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $vues;

    /**
     * @ORM\ManyToOne(targetEntity=Agence::class, inversedBy="proprietes")
     */
    private $agence;

    /**
     * @ORM\OneToMany(targetEntity=Commodite::class, mappedBy="propriete")
     */
    private $commodites;

    /**
     * @ORM\ManyToOne(targetEntity=TypePropriete::class, inversedBy="propriete")
     */
    private $typePropriete;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class, inversedBy="proprietes")
     */
    private $agent;

    /**
     * @ORM\OneToMany(targetEntity=Galerie::class, mappedBy="propriete")
     */
    private $galeries;

    public function __construct()
    {
        $this->commodites = new ArrayCollection();
        $this->galeries = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomPropriete(): ?string
    {
        return $this->nomPropriete;
    }

    public function setNomPropriete(string $nomPropriete): self
    {
        $this->nomPropriete = $nomPropriete;

        return $this;
    }

    public function getDesPropriete(): ?string
    {
        return $this->desPropriete;
    }

    public function setDesPropriete(string $desPropriete): self
    {
        $this->desPropriete = $desPropriete;

        return $this;
    }

    public function getPrixPropriete(): ?float
    {
        return $this->prixPropriete;
    }

    public function setPrixPropriete(float $prixPropriete): self
    {
        $this->prixPropriete = $prixPropriete;

        return $this;
    }

    public function getAdrPropriete(): ?string
    {
        return $this->adrPropriete;
    }

    public function setAdrPropriete(string $adrPropriete): self
    {
        $this->adrPropriete = $adrPropriete;

        return $this;
    }

    public function getLocalisation(): ?string
    {
        return $this->localisation;
    }

    public function setLocalisation(string $localisation): self
    {
        $this->localisation = $localisation;

        return $this;
    }

    public function getDistrict(): ?string
    {
        return $this->district;
    }

    public function setDistrict(?string $district): self
    {
        $this->district = $district;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getEtatPropriete(): ?bool
    {
        return $this->etatPropriete;
    }

    public function setEtatPropriete(bool $etatPropriete): self
    {
        $this->etatPropriete = $etatPropriete;

        return $this;
    }

    public function getCommune(): ?string
    {
        return $this->commune;
    }

    public function setCommune(?string $commune): self
    {
        $this->commune = $commune;

        return $this;
    }

    public function getDateAjout(): ?\DateTimeInterface
    {
        return $this->dateAjout;
    }

    public function setDateAjout(\DateTimeInterface $dateAjout): self
    {
        $this->dateAjout = $dateAjout;

        return $this;
    }

    public function getDateSupPropriete(): ?\DateTimeInterface
    {
        return $this->dateSupPropriete;
    }

    public function setDateSupPropriete(?\DateTimeInterface $dateSupPropriete): self
    {
        $this->dateSupPropriete = $dateSupPropriete;

        return $this;
    }

    public function getDateModifPropriete(): ?\DateTimeInterface
    {
        return $this->dateModifPropriete;
    }

    public function setDateModifPropriete(?\DateTimeInterface $dateModifPropriete): self
    {
        $this->dateModifPropriete = $dateModifPropriete;

        return $this;
    }

    public function getSuperficie(): ?string
    {
        return $this->superficie;
    }

    public function setSuperficie(string $superficie): self
    {
        $this->superficie = $superficie;

        return $this;
    }

    public function getStatut(): ?string
    {
        return $this->statut;
    }

    public function setStatut(string $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    public function getPhotoPropriete(): ?string
    {
        return $this->photoPropriete;
    }

    public function setPhotoPropriete(string $photoPropriete): self
    {
        $this->photoPropriete = $photoPropriete;

        return $this;
    }

    public function getVideo(): ?string
    {
        return $this->video;
    }

    public function setVideo(?string $video): self
    {
        $this->video = $video;

        return $this;
    }

    public function getTourVirtuel(): ?string
    {
        return $this->tourVirtuel;
    }

    public function setTourVirtuel(?string $tourVirtuel): self
    {
        $this->tourVirtuel = $tourVirtuel;

        return $this;
    }

    public function getWalkscore(): ?string
    {
        return $this->walkscore;
    }

    public function setWalkscore(?string $walkscore): self
    {
        $this->walkscore = $walkscore;

        return $this;
    }

    public function getRequete(): ?string
    {
        return $this->requete;
    }

    public function setRequete(?string $requete): self
    {
        $this->requete = $requete;

        return $this;
    }

    public function getVues(): ?int
    {
        return $this->vues;
    }

    public function setVues(?int $vues): self
    {
        $this->vues = $vues;

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

    /**
     * @return Collection|Commodite[]
     */
    public function getCommodites(): Collection
    {
        return $this->commodites;
    }

    public function addCommodite(Commodite $commodite): self
    {
        if (!$this->commodites->contains($commodite)) {
            $this->commodites[] = $commodite;
            $commodite->setPropriete($this);
        }

        return $this;
    }

    public function removeCommodite(Commodite $commodite): self
    {
        if ($this->commodites->removeElement($commodite)) {
            // set the owning side to null (unless already changed)
            if ($commodite->getPropriete() === $this) {
                $commodite->setPropriete(null);
            }
        }

        return $this;
    }

    public function getTypePropriete(): ?TypePropriete
    {
        return $this->typePropriete;
    }

    public function setTypePropriete(?TypePropriete $typePropriete): self
    {
        $this->typePropriete = $typePropriete;

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

    /**
     * @return Collection|Galerie[]
     */
    public function getGaleries(): Collection
    {
        return $this->galeries;
    }

    public function addGalery(Galerie $galery): self
    {
        if (!$this->galeries->contains($galery)) {
            $this->galeries[] = $galery;
            $galery->setPropriete($this);
        }

        return $this;
    }

    public function removeGalery(Galerie $galery): self
    {
        if ($this->galeries->removeElement($galery)) {
            // set the owning side to null (unless already changed)
            if ($galery->getPropriete() === $this) {
                $galery->setPropriete(null);
            }
        }

        return $this;
    }
}
