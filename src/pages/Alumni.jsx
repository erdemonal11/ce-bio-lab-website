import React from 'react';
import './Alumni.css'; // Import the CSS for the Alumni page styling

const Alumni = () => {
  return (
    <div className="alumni-container">
      <h1>Graduate Students</h1>

      {/* PhD Graduates Section */}
      <h2>PhD Graduates</h2>
      <div className="phd-graduates">
        <div className="phd-graduate">
          <img src="/images/sirunozcelik.png" alt="Sirun Özçelik" />
          <div className="graduate-info">
            <h3>Sirun Özçelik</h3>
            <p>Graduated: Ph.D., 2021</p>
            <p>Current Position: IBDP Chemistry Teacher and Extended Essay Coordinator, İSTEK Atanur Oğuz Schools</p>
          </div>
        </div>

        <div className="phd-graduate">
          <img src="/images/ezgikizilkoncaduran.png" alt="Ezgi Kızılkonca Duran" />
          <div className="graduate-info">
            <h3>Ezgi Kızılkonca Duran</h3>
            <p>Graduated: Ph.D., 2020</p>
            <p>Current Position: R&D and QC Manager, Polisan Kansai, Turkey</p>
          </div>
        </div>

        <div className="phd-graduate">
          <img src="/images/paryahashemimyandoab.png" alt="Parya Hashemimyandoab" />
          <div className="graduate-info">
            <h3>Parya Hashemimyandoab</h3>
            <p>Graduated: Ph.D., 2018</p>
            <p>Current Position: Senior Analytical Chemist, Marjaan Khatam, Iran</p>
          </div>
        </div>

        <div className="phd-graduate">
          <img src="/images/sesiluzascierkan.png" alt="Sesil Uzaşçı Erkan" />
          <div className="graduate-info">
            <h3>Sesil Uzaşçı Erkan</h3>
            <p>Graduated: Ph.D., 2017</p>
            <p>Current Position: Chief Chemist, Turkish Trade and Customs Ministry, Turkey</p>
          </div>
        </div>

        <div className="phd-graduate">
          <img src="/images/hakankaygusuz.png" alt="Hakan Kaygusuz" />
          <div className="graduate-info">
            <h3>Hakan Kaygusuz</h3>
            <p>Graduated: Ph.D., 2017</p>
            <p>Current Position: Assoc. Prof. Dr., Altınbaş University, Turkey</p>
          </div>
        </div>

        <div className="phd-graduate">
          <img src="/images/filiztezcan.png" alt="Filiz Tezcan" />
          <div className="graduate-info">
            <h3>Filiz Tezcan</h3>
            <p>Graduated: Ph.D., 2014</p>
            <p>Current Position: Chief Chemist, Turkish Trade and Customs Ministry, Turkey</p>
          </div>
        </div>

        <div className="phd-graduate">
          <img src="/images/seldabaskankahraman.png" alt="Selda Başkan Kahraman" />
          <div className="graduate-info">
            <h3>Selda Başkan Kahraman</h3>
            <p>Graduated: Ph.D., 2012</p>
            <p>Current Position: R&D Manager, Polisan Kansai, Turkey</p>
          </div>
        </div>

        <div className="phd-graduate">
          <img src="./images/mehmetserifcansever.png" alt="Mehmet Şerif Cansever" />
          <div className="graduate-info">
            <h3>Mehmet Şerif Cansever</h3>
            <p>Graduated: Ph.D., 2010</p>
            <p>Current Position: Assoc. Prof. Dr., Istanbul University, Turkey</p>
          </div>
        </div>

        <div className="phd-graduate">
          <img src="/images/gamzekavranbelin.png" alt="Gamze Kavran Belin" />
          <div className="graduate-info">
            <h3>Gamze Kavran Belin</h3>
            <p>Graduated: Ph.D., 2003</p>
            <p>Current Position: Research Scientist, University of Geneva, Switzerland</p>
          </div>
        </div>

        <div className="phd-graduate">
          <img src="/images/mehmedsaidnutku.png" alt="Mehmed Said Nutku" />
          <div className="graduate-info">
            <h3>Mehmed Said Nutku</h3>
            <p>Graduated: Ph.D., 1999</p>
            <p>Current Position: Chairman of the Board, Ron Kimya, Turkey</p>
          </div>
        </div>
      </div>

      {/* M.Sc. Graduates Section */}
      <h2>M.Sc. Graduates</h2>
      <div className="msc-graduates">
        <ul>
          <li>Merve Ece Temelkuran (2023)</li>
          <li>Seray Öztürk (2022)</li>
          <li>Duygu Karadeniz (2021)</li>
          <li>Elif Demir (2021)</li>
          <li>Ezgi Fidan (2021)</li>
          <li>Nil Işık Yeşil (2020)</li>
          <li>Bersu Geçim (2020)</li>
          <li>Melda Akay (2018)</li>
          <li>Orhun Çelen (2018)</li>
          <li>Merve Buldu (2017)</li>
          <li>Merve Kopar (2017)</li>
          <li>Javaria Aftab (2017)</li>
          <li>Semira Bener (2016)</li>
          <li>Nilay Kahya (2016)</li>
          <li>Veselina Adimcilar (2016)</li>
          <li>Görkem Gezek (2016)</li>
          <li>Zeynep Kalaycıoğlu (2015)</li>
          <li>Ebru Çevik (2013)</li>
          <li>Esin Kaftanoğlu (2013)</li>
          <li>Ezgi Kızılkonca (2013)</li>
          <li>Güler Uyar (2012)</li>
          <li>Sesil Uzaşçı (2011)</li>
          <li>Hakan Kaygusuz (2011)</li>
          <li>Filiz Tezcan (2008)</li>
          <li>Hilal Müjde Aydin (2007)</li>
          <li>Selda Başkan (2005)</li>
          <li>Asli Gürel (2005)</li>
          <li>Nilgün Kocatürk (2002)</li>
          <li>Kezban Şenel (1996)</li>
          <li>Nevin Öztekin (1991)</li>
        </ul>
      </div>
    </div>
  );
};

export default Alumni;
