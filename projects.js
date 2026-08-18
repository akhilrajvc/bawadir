const completed = [
'BIW INFRASTRUCTURE PROJECT AT HIDD','BLA – BOUNDARY WALL CONSTRUCTION','BLA SEWERAGE NETWORK','VILLA AT MAMEER','SURFACE DRAINAGE WORK TWO STOREY VILLA AT JANABIYA','BIW – STP – ROAD & FOOT PATH CONSTRUCTION','SEWERAGE & PLOT ENTRANCE WORK AT BIIP – SALMAN INDUSTRIAL CITY','BAPCO GAS LINE REINSTATEMENT WORK @ HIDD','CONSTRUCTION OF FOOTPATH AND CAR PARKING @ MUHARAQ BLOCK -228','CONSTRUCTION OF CAR PARK @ JIDHAFS, BLOCK 419, ROAD - 1950','PROPOSED JUNCTION IMPROVEMENT RE SURFACING, KERBING AND BLOCK PAVING TO JUNCTION SPEED TABLE @ JIDHAFS, ROAD 1943 & 1946','MAJOR REFURBISHMENT PROJECTS SUMMER 2016 (EXTENSION WORKS AT SCHOOL)','3 STOREY BUILDING AT EAST RIFFA','AMAS -14 WEST – INFRASTRUCTURE WORKS','PLOT 22 B.2 INFRASTRUCTURE @ DIYAR AL MUHARAQ','EAST HIDD INFRASTRUCTURE WORKS','BIWLAC PHASE 1-ADDITIONAL 2 FLOORS EXTENTION (BLDG 2795)','400 KVA TRANSMISSION DEVELOPMENT – LS CABLES PROJECT','KING ABDULLAH BIN ABDULZIZ MEDICALCITY (KAMC) PHAISE 1','BIN KHULOOD SCHOOL (MAINTANANCE WORK)','JUSTA KITCHEN CIVIL WORKS @ ALBA','MODIFICATION THE PARKING AREA FOR THE BAHRAIN MOSQUE','BOUNDARY WALL BATELCO SALMANIYA','RESTORATION WORKS OF CAA HQ BUILDINGS','BUILDING RENOVATION FOR SADDAD EXCHANGE','PAVING WORK @ AALI','AL AMANI WORKSHOP RENNOVATION WORKS','TANK FOUNDATION WORK @ ARAMCON HIDD PLANT','BOLLARDS FIXING WORK @ BIW','HAMLA BATELCO HEADQUARTERS PAVING WORK','BATELCO -HAWAR PROJECT','CITI BANK CIVIL MAINTANANCE WORK','HIDD VILLA MAINTANANCE WORK','MARRASSI GALLERIA - PAVING WORKS','PADEL COURT CONSTRUCTION @DILMUNIYA','RESTURANT RENOVATION WORK @ ADILYA','SAKHER CAMP AT M75','FENCE MAINTENANCE WORK @ BAHRAIN MARINA','INFRASTRUCTURE WORKS @ HAMLA GPC','DIYAR AL MUHARRAQ ASSET 23B SECONDRY INFRASTRUCURE WORKS','IKNS SCHOOL RENOVATION WORKS','PADEL COURT CONSTRUCTION @GOLF CLUB RIFFA','UNIVERCITY OF TECHNOLOGY BAHRAIN ENCHANCEMENT','ASPHALT PAVING WORKS','BIW LABOUR CAMP MAINTANANCE WORK','JANUSAAN HOUSING PROJECT','CONSTRUCTION AND MAINTANANCE OF 720SOCIAL APARTMENTS','UNITS IN MADINAT SALMAN ISLAND -12 (D16 & D 17)','GALALI BEACH FRONT DEVELOPMENT','CIVIL TERM CONTRACT WORK VARIOUS LOCATION','CIVIL TERM CONTRACT WORK VARIOUS LOCATION','SECURITY CABIN CONSTRUCTION WORKS @ UTB SALMABAD','CIVIL TERM CONTRACT VARIOUS LOCATION -JAHECON- AALI','CIVIL TERM CONTRACT VARIOUS LOCATION -JAHECON- SEEF','BIW LABOUR CAMP MAINTENANCE WORK','WATER TRANS PPE LINE WORKS (AMMAS & RAMLI)','DIVERSION OF AGRICULTURE LINE AT SAFIRIYYA AVENUE 51 & 48 - IRRIGATION LINE WORK','BIN KHULOOD SCHOOL RENOVATION WORK','EAST SITRA SOCIAL HOUSING DEVELOPMENT - INTERLOCK/NASS','RETAINING WALL CONSTRUCTION WORK ASKER','AL FATHEH AVENUE PROJECT - INTERLOCK/NASS','CIVIL TERM CONTRACT VARIOUS LOCATION -INTERLOCK CO- RIFFA','CIVIL TERM CONTRACT VARIOUS LOCATION -AL AHALIA- MAMEER','ROYAL TERMINAL FACILITY -AIRPORT','BIW FENCE WORK','BIW OFFICE MAINTANANCE WORK','CONCRETE SILO AND STORAGE TANK FOUNDATION WORK -HIDD','IRRIGATION TANK CONSTRUCTION - AALI RPMD - INTERLOCK/NASS','SHERATON HOTEL DEVELOPMENT','IBN AL NAFEES SCHOOL MAINTANANCE -SITRA','121 MARASSI CIPRIYANI ROAD MODIFICATION WORKS','MARRASSI DAM TERM CONTRACT WORKS','MARRASSI AL BAHRAIN ROAD WORKS','REEF VILLA ALMOYAD PAVING WORK','MUHARAQ RING ROAD BUSAITEEN LINK PHASE 3','TERM CONTRACT RPMD NABISALAHA AL AHALIA','BAHRAIN MARINA - SIGN BOARD FOUNDATION WORK','ZAKKIR PALACE MAINTANANCE WORK','RIFFA VILLA RENOVATION WORK','JURDAB RPMD ROAD WORKS'
];
const ongoing = [
'DIYAR AL MUHARRAQ -NORTH ISLAND INTERIM ACCESS INFRASTRUCTURE PROJECT-ROAD WORK','AL SIDRA SECONDARY INFRASTRUCTURE PROJECT','ARAD VILLA 1037 MUNICIPALITY MAINTANANCE WORK','ETD 400 KV RIFFA - PRECAST BEAM WORK','SAFRIYA PALACE PAVING MAINTANANCE WORK','DIYAR AL MUHARRAQ -NORTH ISLAND INTERIM ACCESS @INFRASTRUCTURE PROJECT - OUT FALL CONSTRUCTION WORK'
];

// Original project photos already present in the repository are retained first.
const images = ['img-095.jpg','img-031.jpg','img-084.jpg','img-101.jpg','img-071.jpg','img-046.jpg','img-047.jpg','img-058.jpg','img-020.jpg','img-100.jpg','img-073.jpg','img-025.jpg'];

// Representative stock imagery for portfolio entries without an original photo.
// These are deliberately described as representative visuals, not photographs of
// the named projects. Sources are free-to-use Pexels images.
const fallbackImages = {
  building: 'https://images.pexels.com/photos/31579486/pexels-photo-31579486.jpeg?auto=compress&cs=tinysrgb&w=1200',
  crane: 'https://images.pexels.com/photos/9370034/pexels-photo-9370034.jpeg?auto=compress&cs=tinysrgb&w=1200',
  road: 'https://images.pexels.com/photos/34338597/pexels-photo-34338597.jpeg?auto=compress&cs=tinysrgb&w=1200',
  construction: 'https://images.pexels.com/photos/5505119/pexels-photo-5505119.jpeg?auto=compress&cs=tinysrgb&w=1200',
  residential: 'https://images.pexels.com/photos/8840842/pexels-photo-8840842.jpeg?auto=compress&cs=tinysrgb&w=1200'
};

function fallbackForProject(name, index) {
  const n = name.toLowerCase();
  if (/road|paving|asphalt|junction|parking|footpath|interlock|ring road|surface/.test(n)) return fallbackImages.road;
  if (/villa|housing|apartments|residential|palace/.test(n)) return fallbackImages.residential;
  if (/school|university|hotel|restaurant|kitchen/.test(n)) return fallbackImages.building;
  if (/sewerage|drainage|irrigation|water|outfall|agriculture line/.test(n)) return fallbackImages.construction;
  if (/infrastructure|foundation|tank|silo|400 kv|transmission|terminal|development/.test(n)) return fallbackImages.crane;
  if (/fence|wall|bollard|cabin|security/.test(n)) return fallbackImages.construction;
  return index % 2 ? fallbackImages.building : fallbackImages.construction;
}

const gallery = document.getElementById('projectGallery');
function render(filter='all') {
  if (!gallery) return;
  const items = [
    ...completed.map((name,i)=>({name,status:'completed',num:i+1})),
    ...ongoing.map((name,i)=>({name,status:'ongoing',num:i+1}))
  ].filter(x => filter==='all' || x.status===filter);

  gallery.innerHTML = items.map((item,i)=> {
    const localImage = i < images.length ? `assets/projects/${images[i % images.length]}` : '';
    const fallback = fallbackForProject(item.name, i);
    const image = localImage
      ? `<img src="${localImage}" data-fallback="${fallback}" alt="Representative construction portfolio image">`
      : `<img src="${fallback}" alt="Representative construction portfolio image">`;
    return `<article class="project-card"><div class="project-image">${image}<span>${item.status === 'ongoing' ? 'Ongoing' : 'Completed'}</span></div><div class="project-info"><small>${item.status === 'ongoing' ? 'Ongoing project' : 'Portfolio project'}</small><h3>${item.name}</h3></div></article>`;
  }).join('');

  gallery.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = 'true';
      img.src = img.dataset.fallback;
    }, {once:true});
  });
}

document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter);}));
render();
