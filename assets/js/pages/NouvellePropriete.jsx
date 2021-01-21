import React, { useEffect, useState } from 'react';
import Field from '../components/forms/propriete/Field';
import Textarea from '../components/forms/propriete/Textarea';
import Select from '../components/forms/Select';
import ProprietesApi from '../services/ProprietesApi';

const NouvellePropriete = ({history, match}) => {

    const { id = "create"} =  match.params;


    const [propriete, setPropriete]= useState({
        nomPropriete: "",
        prix: "",
        localisation: "",
        ville: "",
        commune:"",
        superficie:"",
        statut:"",
        type: "",
        nbrPiece: "",
        salleEau: "",
        desPropriete: "",
    });

    const [errors, setErrors]= useState({
        nomPropriete: "",
        prix: "",
        localisation: "",
        ville: "",
        commune:"",
        superficie:"",
        statut:"",
        type: "",
        nbrPiece: "",
        salleEau: "",
        desPropriete: "",
    });

    const [editing, setEditing] = useState(false);

    //Récuperation de la propriété en fonction de l'identifiant
    const fetchPropriete = async id => {
        try {
            const { nomPropriete, prix, localisation, ville, commune, superficie, 
                statut, type, nbrPiece, salleEau, desPropriete } = await ProprietesApi.find(id);

            setPropriete({ nomPropriete, prix, localisation, ville, commune, superficie, 
                statut, type, nbrPiece, salleEau, desPropriete });

        } catch (error) {
            // history.replace("/proprietes");
        }
    }

    //Chargment du client si besoin au chargment du composant ou au chargement de l'identifiant
    useEffect(()=> {
        if(id !== "create") {
            setEditing(true);
            fetchPropriete(id);
        }  
    }, [id]);


    //Gestion des inputs dans le formulaire
    const handleChange =  ({currentTarget}) => {
        const {name, value} = currentTarget;
        setPropriete({ ...propriete, [name]: value});
    };

    //Gestion de la soumission
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            
            if(editing) {
                await ProprietesApi.update(id, propriete);
            } else {
                await ProprietesApi.create( propriete);
                history.replace("/");
            }
            setErrors({});

        } catch ({response}) {

            const {violations} = response.data;

            if(violations){

                const apiErrors = {};

                violations.forEach(({propertyPath, message}) => {
                apiErrors[propertyPath] =  message;
                });

                setErrors(apiErrors);
                // toast.error("Oups ! Il y a des erreurs dans votre formulaire")
            }
        }
    }

    return ( 
    <>
    
    <div className="page-title page-main-section parallaxie">
        <div className="container padding-bottom-top-120 text-uppercase text-center">
            <div className="main-title">
            {(!editing && <h1>Nouvelle Propriété</h1>) || (<h1>Modifier la Propriété</h1>)}
            <h5>10 Years Of Experience!</h5>
            <div className="line_4"></div>
            <div className="line_5"></div>
            <div className="line_6"></div>
            <a href="index.html">accueil</a> <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span><a href="submit-property.html">Submit Property</a> </div>
        </div>
    </div>
    <section className="property-details padding">
        <div className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 col-sm-12 col-xs-12">
                    <div className="property-query-area">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="text-uppercase  bottom40">Ajouter votre <span className="color_red">Propriété</span></h3>
                            </div>
                        </div>
                        <form className="callus" onSubmit={handleSubmit}>
                            <div className="row">
                                <Field name="nomPropriete" id="nomPropriete" value={propriete.nomPropriete} error={errors.nomPropriete} onChange={handleChange} placeholder="Nom de la propriété" />
                                <Field name="prix" id="prix" value={propriete.prix} error={errors.prix} onChange={handleChange} placeholder="Prix de la propriété" />
                            </div>
                            <div className="row">
                                <Field name="localisation" id="localisation"  value={propriete.localisation} error={errors.localisation} onChange={handleChange} placeholder="Localisation" />
                                <Field name="ville" id="ville" value={propriete.ville} error={errors.ville} onChange={handleChange} placeholder="Ville" />
                            </div>
                            <div className="row">
                                <Field name="commune" id="commune" value={propriete.commune} error={errors.commune} onChange={handleChange} placeholder="Commune" />
                                <Field name="superficie" type="number" id="superficie"  value={propriete.superficie} error={errors.superficie} onChange={handleChange} placeholder="Superficie (m²)" />
                            </div>
                            <div className="row">
                                <Select name="statut" id="statut"  placeholder="Statut de la propriété" value={propriete.statut} onChange={handleChange} error={errors.statut} >
                                        <option value="En vente">En vente</option>
                                        <option value="Location">Location</option>
                                </Select>
                                <Select name="type" id="type"  placeholder="Type" value={propriete.type} onChange={handleChange} error={errors.type} >
                                        <option value="Villa">Villa</option>
                                        <option value="Appartement">Appartement</option>
                                        <option value="Boutique">Boutique</option>
                                        <option value="Maison">Maison</option>
                                        <option value="Entrepot">Entrepot</option>
                                        <option value="Ferme">Ferme</option>
                                        <option value="Terrain">Terrain</option>
                                        <option value="Lavage-auto">Lavage-auto</option>
                                </Select>
                            </div>
                            <div className="row">
                                <Field name="nbrPiece" id="nbrPiece" type="number" value={propriete.nbrPiece} error={errors.nbrPiece} onChange={handleChange} placeholder="Nombre de pièces" />
                                <Field name="salleEau" id="salleEau"  value={propriete.salleEau} error={errors.salleEau} onChange={handleChange} placeholder="Salle d'eau" />
                            </div>
                            {/* <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="piscine" onChange={handleChange} value={propriete.piscine}/>
                                <label class="form-check-label" for="inlineCheckbox1">Piscine</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="spa" onChange={handleChange} value={propriete.spa}/>
                                <label class="form-check-label" for="inlineCheckbox1">spa</label>
                            </div> */}
                            <div className="row">
                                <Textarea value={propriete.desPropriete} error={errors.desPropriete} name="desPropriete" onChange={handleChange} id="desPropriete" placeholder="Description" />
                            </div>
                            {/* <div className="row">
                                <div className="col-md-12">
                                    <div className="group-button-search"> 
                                        <a data-toggle="collapse" href=".search-propertie-filters" className="more-filter"> <i className="fa fa-plus text-1 bg-color-yello" aria-hidden="true"></i> <i className="fa fa-minus text-2 hide bg-color-yello" aria-hidden="true"></i>
                                            <div className="text-1">Plus de commodités</div>
                                            <div className="text-2 hide">Less Propertie Detail</div>
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                        
                            {/* <div className="search-propertie-filters collapse">
                                <div className="container-2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="search-form-group white">
                                            <input id="panneauSolaire" value={propriete.panneauSolaire}  type="checkbox" name="check-box" />
                                            <span>Panneau Solaire</span> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="search-form-group white">
                                            <input id="garage" value={propriete.garage} onChange={handleChange}  type="checkbox" name="check-box" />
                                            <span>Garage</span> </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <Input value={propriete.piscine} label="Piscine" onChange={handleChange}/>
                                        <Input value={propriete.spa} label="Spa" onChange={handleChange}/>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="row">
                                <input type="file" accept="image/*" value={propriete.photoPropriete} onChange={handleChange} name="photoPropriete"/>
                            </div>
                            <div className="row">
                                <input type="file" multiple accept="image/*" value={propriete.galeries} onChange={handleChange} name="galeries"/>
                            </div>
                            <div className="row padding_t55">
                                <div className="col-md-12">
                                    <h3 className="text-uppercase  bottom40">Photo <span className="color_red">Propriété:</span></h3>
                                </div>
                                <div className="col-sm-12">
                                    <div className="file_uploader bottom20" value={propriete.photoPropriete} onChange={handleChange} name="photoPropriete">
                                            <div className="dz-default dz-message">
                                                <span>
                                                <i className="fa fa-picture-o" aria-hidden="true"></i>
                                                Drag & drop images here …
                                                </span>
                                            </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="row padding_t55">
                                <div className="col-md-12">
                                    <h3 className="text-uppercase  bottom40">Galerie <span className="color_red">Propriété:</span></h3>
                                </div>
                                <div className="col-sm-12">
                                    <div className="file_uploader bottom20">
                                            <div value={propriete.galeries} onChange={handleChange} className="dz-default dz-message">
                                                <span>
                                                <i className="fa fa-picture-o" aria-hidden="true"></i>
                                                Drag & drop images here …
                                                </span>
                                            </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-md-12 top30">
                                    <div className="query-submit-button">
                                        <button type="submit" className="btn_fill black">Enregistrer</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row padding_t55">
                            <div className="col-md-12">
                                <h3 className="text-uppercase  bottom40">Property Place <span className="color_red">On Map:</span></h3>
                            </div>
                            <div className="col-md-12">
                                <div id="map_canvas"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </> );
}
 
export default NouvellePropriete;