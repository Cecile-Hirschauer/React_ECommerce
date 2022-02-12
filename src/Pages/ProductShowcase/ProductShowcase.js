import React, {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import './ProductShowcase.css';
import inventory from '../../data/inventory';
import { useDispatch } from 'react-redux';

export default function ProductShowcase() {

  const [nbMugs, setNbMugs] = useState(1);

  const {id} = useParams();
  console.log(id);

  const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, '').trim() === id);
  
  console.log(productClicked);

  const updateMugs = e => {
    setNbMugs(Number(e.target.value))
  }

  return (
    <div className='showcase'>
      <div className="container-img-showcase">
        <img 
          src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} 
          alt="" 
          className="img-showcase" />
      </div>
      <div className="product-infos">
        <h2>{inventory[productClicked].title}</h2>
        <p>Prix : {inventory[productClicked].price}€</p>
        <form>
          <label htmlFor="quantity">Quantité</label>
          <input 
            type="number" 
            id="quantity" 
            value={nbMugs}
            onChange={updateMugs}/>
        </form>
      </div>
    </div>
  )
}
