/*
 * Representative project imagery for portfolio entries that do not have
 * original project photography in the repository.
 *
 * Images are from Pexels and are used as visual/representative imagery only;
 * they are not presented as photographs of the named Bawadir projects.
 */
(function () {
  const gallery = document.getElementById('projectGallery');
  if (!gallery) return;

  const pexels = {
    road: 'https://images.pexels.com/photos/8373204/pexels-photo-8373204.jpeg?auto=compress&cs=tinysrgb&w=1200',
    roadWork: 'https://images.pexels.com/photos/4575147/pexels-photo-4575147.jpeg?auto=compress&cs=tinysrgb&w=1200',
    asphalt: 'https://images.pexels.com/photos/29419209/pexels-photo-29419209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    drainage: 'https://images.pexels.com/photos/37627673/pexels-photo-37627673.jpeg?auto=compress&cs=tinysrgb&w=1200',
    trench: 'https://images.pexels.com/photos/5579584/pexels-photo-5579584.jpeg?auto=compress&cs=tinysrgb&w=1200',
    building: 'https://images.pexels.com/photos/2100681/pexels-photo-2100681.jpeg?auto=compress&cs=tinysrgb&w=1200',
    crane: 'https://images.pexels.com/photos/9370034/pexels-photo-9370034.jpeg?auto=compress&cs=tinysrgb&w=1200',
    villa: 'https://images.pexels.com/photos/11563808/pexels-photo-11563808.jpeg?auto=compress&cs=tinysrgb&w=1200',
    school: 'https://images.pexels.com/photos/18538036/pexels-photo-18538036.jpeg?auto=compress&cs=tinysrgb&w=1200',
    hotel: 'https://images.pexels.com/photos/16901382/pexels-photo-16901382.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fence: 'https://images.pexels.com/photos/37468625/pexels-photo-37468625.jpeg?auto=compress&cs=tinysrgb&w=1200',
    worker: 'https://images.pexels.com/photos/10383579/pexels-photo-10383579.jpeg?auto=compress&cs=tinysrgb&w=1200'
  };

  function imageForProject(name, index) {
    const n = name.toLowerCase();
    if (/sewer|drainage|irrigation|outfall|water|agriculture line/.test(n)) return pexels.drainage;
    if (/school|university|ikns/.test(n)) return pexels.school;
    if (/hotel|marassi galleria|sheraton|restaurant|kitchen/.test(n)) return pexels.hotel;
    if (/villa|housing|apartments|social apartments|residential/.test(n)) return pexels.villa;
    if (/fence|boundary wall|bollards|cabin|security/.test(n)) return pexels.fence;
    if (/paving|asphalt|road|junction|ring road|footpath|parking|interlock|surface|car park/.test(n)) {
      return index % 3 === 0 ? pexels.road : index % 3 === 1 ? pexels.roadWork : pexels.asphalt;
    }
    if (/foundation|silo|tank|precast|400 kv|transmission|infrastructure|development|construction/.test(n)) {
      return index % 2 ? pexels.crane : pexels.building;
    }
    return index % 2 ? pexels.worker : pexels.building;
  }

  function applyImages() {
    gallery.querySelectorAll('.project-card').forEach((card, index) => {
      const image = card.querySelector('.project-image img');
      const title = card.querySelector('.project-info h3');
      if (!image || !title || image.dataset.fallbackBound === 'true') return;

      const replacement = imageForProject(title.textContent || '', index);
      image.dataset.fallbackBound = 'true';
      image.alt = 'Representative construction image for project portfolio';
      image.addEventListener('error', function () {
        if (image.dataset.replaced === 'true') return;
        image.dataset.replaced = 'true';
        image.src = replacement;
      });

      if (image.complete && image.naturalWidth === 0) {
        image.dataset.replaced = 'true';
        image.src = replacement;
      }
    });
  }

  applyImages();
  new MutationObserver(applyImages).observe(gallery, { childList: true, subtree: true });
})();
