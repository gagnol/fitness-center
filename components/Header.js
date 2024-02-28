import { useRouter } from 'next/router';
import React, { useState } from "react";
import { FaGlobeAmericas, FaCaretDown, FaSearch, } from "react-icons/fa"
import {HiOutlineLocationMarker} from 'react-icons/hi'
import styles from '../styles/Header.module.css'
import ReactTooltip from 'react-tooltip';
import Tippy from '@tippyjs/react/headless';
import NextLink from 'next/link'
import Modal from './Modal'


const Header = () => {
  const router = useRouter()
  const [visible, setVisible] = useState(true);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  //console.log(data);
  return (
    <header>
      <a className={styles.nav_top}></a>

      <div className={styles.nav_belt}>
        <div className={styles.nav_left}>
          <div className={styles.nav_logo}>
            <a className={styles.nav_logo_link}></a>
            <a className={styles.nav_logo_tagline}>Try Prime</a>
          </div>
          </div>
               
        <div className={styles.nav_right}>
          <div className={styles.nav_holiday}>
        
          </div>
        </div>
        <div className={styles.nav_fill}>
          <div className={styles.nav_search}>
            <form>
              <div className={styles.nav_left}>
                <span className={styles.nav_search_label}>All</span>
                <i aria_hidden="true"><FaCaretDown /></i>
                <select className={styles.nav_search_select}>
                  <option value="aps">All Departments</option>
                  <option value="alexa-skills">Alexa Skills</option>
                  <option value="instant-video">Amazon Video</option>
                  <option value="warehouse-deals">Amazon Warehouse Deals</option>
                  <option value="appliances">Appliances</option>
                  <option value="mobile-apps">Apps &amp; Games</option>
                  <option value="arts-crafts">Arts, Crafts &amp; Sewing</option>
                  <option value="automotive">Automotive Parts &amp; Accessories</option>
                  <option value="baby-products">Baby</option>
                  <option value="beauty">Beauty &amp; Personal Care</option>
                  <option value="stripbooks">Books</option>
                  <option value="popular">CDs &amp; Vinyl</option>
                  <option value="mobile">Cell Phones &amp; Accessories</option>
                  <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                  <option value="fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
                  <option value="fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
                  <option value="fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
                  <option value="fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
                  <option value="fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
                  <option value="collectibles">Collectibles &amp; Fine Art</option>
                  <option value="computers">Computers</option>
                  <option value="courses">Courses</option>
                  <option value="financial">Credit and Payment Cards</option>
                  <option value="digital-music">Digital Music</option>
                  <option value="electronics">Electronics</option>
                  <option value="gift-cards">Gift Cards</option>
                  <option value="grocery">Grocery &amp; Gourmet Food</option>
                  <option value="handmade">Handmade</option>
                  <option value="hpc">Health, Household &amp; Baby Care</option>
                  <option value="local-services">Home &amp; Business Services</option>
                  <option value="garden">Home &amp; Kitchen</option>
                  <option value="industrial">Industrial &amp; Scientific</option>
                  <option value="digital-text">Kindle Store</option>
                  <option value="fashion-luggage">Luggage &amp; Travel Gear</option>
                  <option value="luxury-beauty">Luxury Beauty</option>
                  <option value="magazines">Magazine Subscriptions</option>
                  <option value="movies-tv">Movies &amp; TV</option>
                  <option value="mi">Musical Instruments</option>
                  <option value="office-products">Office Products</option>
                  <option value="lawngarden">Patio, Lawn &amp; Garden</option>
                  <option value="pets">Pet Supplies</option>
                  <option value="prime-exclusive">Prime Exclusive</option>
                  <option value="pantry">Prime Pantry</option>
                  <option value="software">Software</option>
                  <option value="sporting">Sports &amp; Outdoors</option>
                  <option value="tools">Tools &amp; Home Improvement</option>
                  <option value="toys-and-games">Toys &amp; Games</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="videogames">Video Games</option>
                  <option value="wine">Wine</option>
                </select>
              </div>
              <div className={styles.nav_right}>
                <i aria-hidden="true"><FaSearch /></i>
                <input type="submit" />
              </div>
              <div className={styles.nav_fill}>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <nav className={styles.nav_main}>
        <div className={styles.nav_left}>
          <div className={styles.nav_shop}>
            <a className={styles.nav_a} >
              Departments
              <i aria-hidden="true"><FaCaretDown /></i>
            </a>
          </div>
        </div>
        <div className={styles.nav_right}>
          <a className={styles.nav_a} >
            <span>EN</span>
            <i aria-hidden="true"> <FaGlobeAmericas /> </i>
            <i aria-hidden="true"><FaCaretDown /></i>
          </a>
     
            <Modal/>

          <a className={styles.nav_a} >
            Orders
          </a>

          <a className={styles.nav_a} >
            Try Prime
            <i aria-hidden="true"><FaCaretDown /></i>
          </a>

          <a className={styles.nav_a} >
            <div className={styles.cart}>
              <span>0</span> Cart
            </div>
          </a>

        </div>
        <div className={styles.nav_fill}>
          <ul>
            <li><a >Your Amazon.com</a></li>
            <li><a >Today s Deals</a></li>
            <li><a >Gift Cards &amp; Registry</a></li>
            <li><a >Sell</a></li>
            <li><a >Help</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
