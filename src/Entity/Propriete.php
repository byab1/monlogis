<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProprieteRepository;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass=ProprieteRepository::class)
 * @ApiResource(
 * attributes={
 *      "pagination_enabled"=true,
 *      "pagination_items_per_page"=20,
 *      "order": {"dateAjout": "desc"}
 *  },
 * subresourceOperations={
 *  "api_agences_proprietes_get_subresource"={
 *  "normalization_context"={"groups"="proprietes_subresource"}
 * }
 * },
 * normalizationContext={"groups"={"lecture_propriete"}}
 * )
 * @ApiFilter(SearchFilter::class)
 */
class Propriete
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="Le nom de la propriété est obligatoire")
     */
    private $nomPropriete;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="La description de la propriété est obligatoire")
     */
    private $desPropriete;

    /**
     * @ORM\Column(type="float")
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="Le prix de la propriété est obligatoire")
     * @Assert\Type(type="numeric", message="Le prix de la propriété doit être numérique")
     */
    private $prixPropriete;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="L'adresse de la propriété est obligatoire")
     */
    private $adrPropriete;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="La localisation de la propriété est obligatoire")
     */
    private $localisation;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $district;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="La ville de la propriété est obligatoire")
     */
    private $ville;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $etatPropriete;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $commune;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $dateAjout;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $dateModifPropriete;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $superficie;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="Le statut de la propriété est obligatoire")
     * @Assert\Choice(choices={"En vente", "Location"}, message="Le statut doit être En vente ou en Location")
     */
    private $statut;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="Veuillez ajouter les photos de la propriété")
     */
    private $photoPropriete;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $video;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $tourVirtuel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $walkscore;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"lecture_propriete"})
     */
    private $requete;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $vues;

    /**
     * @ORM\ManyToOne(targetEntity=Agence::class, inversedBy="proprietes")
     * @Groups({"lecture_propriete"})
     */
    private $agence;

    /**
     * @ORM\OneToMany(targetEntity=Commodite::class, mappedBy="propriete")
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="Veuillez indiquer les commodités de la propriété")
     */
    private $commodites;

    /**
     * @ORM\ManyToOne(targetEntity=TypePropriete::class, inversedBy="propriete")
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     * @Assert\NotBlank(message="Veuillez renseigner le type de propriété")
     * @Assert\Choice(choices={"Villa", "Terrain", "Magasin", "Boutique", "Maison", "Ferme", "Lavage-auto", "Appartement", "Entrepot"}, message="Le statut doit être : maison, terrain, villa, appartement, lavage-auto, ferme, boutique ou entrepot")
     */
    private $typePropriete;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class, inversedBy="proprietes")
     * @Groups({"lecture_propriete"})
     */
    private $agent;

    /**
     * @ORM\OneToMany(targetEntity=Galerie::class, mappedBy="propriete")
     * @Groups({"lecture_propriete", "proprietes_subresource"})
     */
    private $galeries;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="proprietes")
     */
    private $user;

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
