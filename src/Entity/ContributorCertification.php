<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * ContributorCertification
 *
 * @ORM\Table(name="contributor_certification")
 * @ORM\Entity
 */
class ContributorCertification
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_certif", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idCertif;

    /**
     * @var int
     *
     * @ORM\Column(name="id_user", type="integer", nullable=false)
     */
    private $idUser;

    /**
     * @var string
     *
     * @ORM\Column(name="titre", type="string", length=255, nullable=false)
     */
    private $titre;

    /**
     * @var string
     *
     * @ORM\Column(name="domaine", type="string", length=255, nullable=false)
     */
    private $domaine;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=false)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="issued_by", type="string", length=255, nullable=false)
     */
    private $issuedBy;

    /**
     * @var string
     *
     * @ORM\Column(name="date_deb", type="string", length=7, nullable=false)
     */
    private $dateDeb;

    /**
     * @var string
     *
     * @ORM\Column(name="date_fin", type="string", length=7, nullable=false)
     */
    private $dateFin;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_operation", type="date", nullable=false, options={"default"="CURRENT_TIMESTAMP"})
     */
    private $dateOperation = 'CURRENT_TIMESTAMP';

    public function getIdCertif(): ?int
    {
        return $this->idCertif;
    }

    public function getIdUser(): ?int
    {
        return $this->idUser;
    }

    public function setIdUser(int $idUser): self
    {
        $this->idUser = $idUser;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDomaine(): ?string
    {
        return $this->domaine;
    }

    public function setDomaine(string $domaine): self
    {
        $this->domaine = $domaine;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getIssuedBy(): ?string
    {
        return $this->issuedBy;
    }

    public function setIssuedBy(string $issuedBy): self
    {
        $this->issuedBy = $issuedBy;

        return $this;
    }

    public function getDateDeb(): ?string
    {
        return $this->dateDeb;
    }

    public function setDateDeb(string $dateDeb): self
    {
        $this->dateDeb = $dateDeb;

        return $this;
    }

    public function getDateFin(): ?string
    {
        return $this->dateFin;
    }

    public function setDateFin(string $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getDateOperation(): ?\DateTimeInterface
    {
        return $this->dateOperation;
    }

    public function setDateOperation(\DateTimeInterface $dateOperation): self
    {
        $this->dateOperation = $dateOperation;

        return $this;
    }


}
