import './Footer.css';
function Footer(){
    return(
        
       <div className="footer">
        <div className='footerSection'>
      {/* -----brand section------- */}
       <div className="footerBrand">
        <h3 style={{color : "#ff6b35", marginBottom : "20px"}}>RestoFlow</h3>
        <p>Delicious food delivered with love.</p>
       </div>

       {/*-------Quick Links----------*/}
       <div className="quickLinks">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
       </div>
      {/* ---------Contact-------------- */}
       <div className="conatct">
        <ul>
            <li>📍 At-Sector V,Kolkata,700102</li>
            <li>📞 +919868720425</li>
            <li>📧 restoflow303@gmail.com</li>
        </ul>
       </div>
       {/* ---------Social Links---------- */}
       <div className="socialLinks">
        <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
       </div>
       </div>
        <div className='copyRight'>
        <p> © 2026 RestoFlow | All Rights Reserved</p>
       </div>
      </div> 
      
       
    )
}

export default Footer;