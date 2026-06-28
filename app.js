// Shiv Bag B2B Catalog Controller & WhatsApp Link Builder
(() => {
  
  // --- CONFIGURATION ---
  // Replace this phone number with your actual registered WhatsApp business number
  // Format: [Country Code][Number] without spaces or '+' (e.g., "919999999999" for India)
  const WHATSAPP_NUMBER = "919429283629"; 

  // --- PRODUCT DATASET ---
  const PRODUCTS = [
    {
      id: "nonwoven-loop",
      name: "Premium Loop Handle Non-Woven Bag",
      category: "nonwoven",
      categoryDisplay: "Non-Woven Bags",
      size: "16 x 20 inches",
      image: "loop_handle_bag_black.png",
      images: ["loop_handle_bag_black.png", "loop_handle_bag_green.png", "loop_handle_bag_yellow.png", "loop_handle_bag_teal.png", "loop_handle_bag.png"],
      description: "Durable and reusable eco-friendly shopping carrier featuring ultrasonically sealed soft loop handles. Ideal for supermarkets and retail showrooms.",
      specs: {
        "Material": "Spunbond Non-Woven Polypropylene",
        "Thickness": "90 GSM",
        "Handle Style": "Ultrasonically Welded Loop",
        "Base Gusset": "3.5 inches"
      }
    },
    {
      id: "nonwoven-dcut",
      name: "Standard D-Cut Non-Woven Bag",
      category: "nonwoven",
      categoryDisplay: "Non-Woven Bags",
      size: "12 x 16 inches",
      image: "dcut_bag.png",
      description: "Classic flat merchandise carrier with punched D-cut handles. Budget-friendly, recyclable, and highly durable.",
      specs: {
        "Material": "Spunbond Non-Woven Polypropylene",
        "Thickness": "75 GSM",
        "Handle Style": "Oval Punched D-Cut",
        "Base Gusset": "None"
      }
    },
    {
      id: "fabric-tote",
      name: "Heavy-Duty Canvas Tote Bag",
      category: "fabric",
      categoryDisplay: "Fabric & Cotton Bags",
      size: "15 x 16 inches",
      image: "canvas_bag.png",
      description: "Luxury canvas shopping tote with long fabric handles. Heavy-duty construction designed for premium unboxing and long-term brand exposure.",
      specs: {
        "Material": "100% Organic Cotton Canvas",
        "Thickness": "320 GSM (12 oz)",
        "Handle Style": "Stitched Canvas Shoulder Straps",
        "Stitching": "Cross-Stitched Reinforcement"
      }
    },
    {
      id: "fabric-cotton",
      name: "Boutique Cotton Drawstring Bag",
      category: "fabric",
      categoryDisplay: "Fabric & Cotton Bags",
      size: "8 x 10 inches",
      image: "cotton_bag.png",
      description: "Soft cotton muslin drawstring pouch. Perfect for packaging jewelry, high-end watches, cosmetics, and luxury accessories.",
      specs: {
        "Material": "Organic Cotton Muslin",
        "Thickness": "150 GSM",
        "Closure": "Dual Cotton Drawstring Cords",
        "Inside Seams": "Overlocked Anti-Fray Stitching"
      }
    },
    {
      id: "fabric-jute",
      name: "Eco-Friendly Jute Shopping Bag",
      category: "fabric",
      categoryDisplay: "Fabric & Cotton Bags",
      size: "14 x 16 inches",
      image: "jute_bag.png",
      description: "Laminated burlap jute bag with padded cotton handles. Excellent load capacity, highly durable, and completely biodegradable.",
      specs: {
        "Material": "Premium Natural Jute Fibers",
        "Thickness": "350 GSM",
        "Handle Style": "Padded Cotton Rope Handles",
        "Interior": "Water-Resistant LDPE Lamination"
      }
    },
    {
      id: "paper-luxury",
      name: "Luxury Rope Handle Paper Bag",
      category: "paper",
      categoryDisplay: "Luxury Paper Bags",
      size: "12 x 15 inches",
      image: "luxury_paper_bag.png",
      description: "Premium art paper gift bag with custom gloss/matte lamination, cardboard bottom support, and knotted cotton rope handles.",
      specs: {
        "Material": "250 GSM Premium Art Paper",
        "Thickness": "250 GSM",
        "Handle Style": "Knotted Cotton Rope (Gloss Finish)",
        "Support": "Top Flap & Bottom Cardboard Reinforcement"
      }
    },
    {
      id: "paper-kraft",
      name: "Eco Brown Kraft Paper Bag",
      category: "paper",
      categoryDisplay: "Luxury Paper Bags",
      size: "10 x 13 inches",
      image: "kraft_bag.png",
      description: "Premium eco-friendly kraft and art paper shopping bags featuring soft knotted rope handles and reinforced metal eyelets. 100% biodegradable, compostable, and recyclable.",
      specs: {
        "Material": "Recycled Kraft & Premium Art Paper",
        "Thickness": "120 to 180 GSM",
        "Handle Style": "Knotted Soft Rope (Reinforced Eyelets)",
        "Base Type": "Reinforced Block Bottom"
      }
    },
    {
      id: "paper-courier",
      name: "Courier Paper Bag",
      category: "paper",
      categoryDisplay: "Luxury Paper Bags",
      size: "As per your Requirements",
      image: "courier_bag.png",
      description: "Heavy-duty reinforced kraft paper mailing envelope featuring a self-seal tamper-evident adhesive strip. 100% recyclable and water-resistant.",
      specs: {
        "Material": "Reinforced Kraft Paper (Eco-friendly)",
        "Thickness": "150 GSM",
        "Closure": "Tamper-Evident Self-Seal Strip",
        "Waterproofing": "Bio-degradable inner lining"
      }
    },
    {
      id: "fabric-felt",
      name: "Luxury Felt Carry Bag",
      category: "fabric",
      categoryDisplay: "Fabric & Cotton Bags",
      size: "As per your Requirements",
      image: "felt_bag.png",
      description: "Premium felt tote bag featuring reinforced leather handles and a spacious main compartment. Perfect for high-end boutique shopping, gifting, and corporate branding.",
      specs: {
        "Material": "Premium Wool Felt (Eco-Friendly)",
        "Thickness": "3mm Felt Fabric",
        "Handle Style": "Genuine Leather Shoulder Straps",
        "Stitching": "Heavy-Duty Reinforced Stitching"
      }
    },
    {
      id: "fabric-neoprene",
      name: "Luxury Neoprene Tote Bag",
      category: "fabric",
      categoryDisplay: "Fabric & Cotton Bags",
      size: "As per your Requirements",
      image: "neoprene_bag.png",
      description: "Premium perforated neoprene carryall featuring high-durability sail rope handles and a matching detachable zippered coin pouch. High elasticity, water-resistant, and machine-washable.",
      specs: {
        "Material": "Perforated Neoprene SBR Polymer",
        "Thickness": "4mm Neoprene Sheet",
        "Handle Style": "Sailing Marine Grade Rope",
        "Includes": "Detachable Zipper Pouch"
      }
    }
  ];

  // --- SVG ILLUSTRATION BUILDER ---
  function getBagIllustrationSVG(category, size = 64) {
    if (category === "nonwoven") {
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Non-Woven Bag -->
          <path d="M26 18V12C26 8.5 28 6 32 6C36 6 38 8.5 38 12V18" stroke="var(--color-gold)" stroke-width="2" stroke-linecap="round"/>
          <rect x="16" y="18" width="32" height="40" rx="2" fill="#121212" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
          <rect x="16" y="18" width="32" height="40" rx="2" fill="url(#glossGrad)" fill-opacity="0.15"/>
          <path d="M20 28H44M20 34H44" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1.5"/>
          <!-- Textured cross hatches to simulate woven fabric texture -->
          <path d="M22 22L42 54M26 22L46 54" stroke="rgba(212, 175, 55, 0.08)" stroke-width="1"/>
        </svg>
      `;
    }
    if (category === "fabric") {
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Fabric Canvas Tote Bag -->
          <path d="M20 22V8C20 8 24 4 32 4C40 4 44 8 44 8V22" stroke="var(--color-gold)" stroke-width="2" stroke-linecap="round"/>
          <rect x="12" y="22" width="40" height="36" rx="4" fill="#121212" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
          <circle cx="32" cy="40" r="8" stroke="var(--color-gold)" stroke-width="1" stroke-dasharray="3 3"/>
          <path d="M14 26H50" stroke="rgba(255,255,255,0.04)" stroke-width="2"/>
        </svg>
      `;
    }
    // paper
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Paper Bag with Twisted Handles -->
        <path d="M24 16C24 16 26 10 32 10C38 10 40 16 40 16" stroke="var(--color-gold)" stroke-width="2" stroke-linecap="round"/>
        <path d="M16 16H48L44 56H20L16 16Z" fill="#121212" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        <path d="M16 22L32 32L48 22" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1.5"/>
        <line x1="20" y1="50" x2="44" y2="50" stroke="var(--color-gold)" stroke-width="1" stroke-dasharray="2 2"/>
      </svg>
    `;
  }

  // --- WHATSAPP TEXT BUILDER ---
  function buildWhatsAppUrl(product) {
    const message = `Hello Shiv Enterprise!\n\nI am interested in placing a B2B wholesale order for:\n\n*Product:* ${product.name}\n*Category:* ${product.categoryDisplay}\n*Dimensions/Size:* ${product.size}\n*Requested Quantity:* (Min. Order 250 pcs)\n\nPlease provide corporate wholesale pricing tiers and delivery logistics terms.\n\nThank you!`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }

  // --- EMAIL TEXT BUILDER ---
  function buildEmailUrl(product) {
    const subject = encodeURIComponent(`B2B Wholesale Enquiry: ${product.name}`);
    const body = encodeURIComponent(`Hello Shiv Enterprise,\n\nI want to enquire about placing a B2B wholesale order for:\n\n*Product:* ${product.name}\n*Category:* ${product.categoryDisplay}\n*Size:* ${product.size}\n*Requested Quantity:* (Min. Order 250 pcs)\n\nPlease provide corporate pricing tiers and shipping details.\n\nThank you!`);
    return `mailto:SHIVEARTH25@GMAIL.COM?subject=${subject}&body=${body}`;
  }

  // --- RENDERING ENGINE ---
  function renderProducts(categoryFilter = "all") {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered = categoryFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === categoryFilter);

    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "glass-card product-card";
      
      const specsHtml = Object.entries(product.specs)
        .filter(([key]) => key !== "Thickness")
        .map(([key, val]) => `
        <div class="spec-row">
          <span class="label">${key}</span>
          <span class="val">${val}</span>
        </div>
      `).join("");

      // Support array of images or fallback SVG
      let mediaHtml = "";
      let hasGallery = false;
      
      if (Array.isArray(product.images) && product.images.length > 0) {
        mediaHtml = `<img src="${product.images[0]}" alt="${product.name}" class="product-card-img" style="cursor: pointer;" title="Click to view full gallery" data-product-id="${product.id}" />`;
        hasGallery = product.images.length > 1;
      } else if (product.image) {
        mediaHtml = `<img src="${product.image}" alt="${product.name}" class="product-card-img" style="cursor: pointer;" title="Click to view image" data-product-id="${product.id}" />`;
      } else {
        mediaHtml = getBagIllustrationSVG(product.category, 80);
      }

      card.innerHTML = `
        <div class="product-card-illustration" ${product.image || product.images ? `data-product-id="${product.id}" style="cursor: pointer;" title="Click to view gallery"` : ""}>
          ${mediaHtml}
          ${hasGallery ? '<div class="gallery-badge" style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.7); color: #fff; padding: 2px 6px; font-size: 0.7rem; border-radius: 4px; pointer-events: none;">🖼️ View Gallery</div>' : ''}
        </div>
        <h3 class="product-card-title">${product.name}</h3>
        <div class="product-card-size">Size: As per your Requirements</div>
        
        <div class="product-card-specs">
          ${specsHtml}
        </div>
        
        <div class="product-card-moq">
          📦 Minimum Order Quantity: 250 pcs
        </div>

        <div class="product-card-actions">
          <a href="${buildWhatsAppUrl(product)}" target="_blank" class="btn btn-wa" title="Inquire on WhatsApp">
            <!-- Inline WhatsApp SVG Icon -->
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right:4px;">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.208-3.82c1.648.978 3.255 1.492 4.966 1.493 5.419.002 9.829-4.399 9.831-9.825 0-2.628-1.022-5.1-2.881-6.958C16.32 3.033 13.843 2.01 11.2 2.01c-5.422 0-9.832 4.401-9.835 9.828-.001 1.77.475 3.428 1.378 4.965l-.997 3.635 3.731-.978zm13.149-6.386c-.282-.141-1.666-.822-1.924-.916-.257-.094-.445-.141-.633.141-.188.282-.727.916-.891 1.103-.164.187-.328.211-.61.07-2.8-.14-3.856-1.036-5.228-2.22-.241-.208-.415-.463-.668-.813-.164-.282-.018-.435.123-.575.127-.127.282-.328.423-.492.141-.164.188-.282.282-.47.094-.188.047-.352-.023-.492-.07-.141-.633-1.525-.867-2.086-.228-.549-.46-.474-.633-.483-.164-.008-.352-.01-.54-.01-.188 0-.493.07-.751.352-.258.282-.986.963-.986 2.348 0 1.385 1.008 2.72 1.149 2.908.141.188 1.984 3.03 4.807 4.246.671.289 1.196.462 1.603.592.674.214 1.287.184 1.771.111.539-.081 1.666-.68 1.901-1.336.235-.656.235-1.219.164-1.336-.07-.117-.258-.188-.54-.328z"/>
            </svg>
            WhatsApp
          </a>
          <a href="${buildEmailUrl(product)}" class="btn btn-email" title="Inquire on Email">
            <!-- Inline Mail Envelope SVG Icon -->
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px; vertical-align: middle;">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Email
          </a>
        </div>
      `;
      
      grid.appendChild(card);
    });
  }

  // --- GALLERY MODAL CONTROLLER ---
  let activeProduct = null;
  let activeImageIndex = 0;

  function initGalleryModal() {
    const modal = document.getElementById("gallery-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const thumbnailsContainer = document.getElementById("modal-thumbnails");
    const closeBtn = document.getElementById("modal-close");
    const prevBtn = document.getElementById("modal-prev");
    const nextBtn = document.getElementById("modal-next");
    const grid = document.getElementById("product-grid");

    if (!modal || !grid) return;

    function openModal(productId) {
      const product = PRODUCTS.find(p => p.id === productId);
      if (!product) return;

      activeProduct = product;
      activeImageIndex = 0;

      // Build product image list
      const imagesList = product.images || (product.image ? [product.image] : []);
      if (imagesList.length === 0) return;

      modal.style.display = "flex";
      setTimeout(() => modal.classList.add("show"), 10);
      updateModalImage();
    }

    function closeModal() {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
        modalImg.src = "";
      }, 300);
    }

    function updateModalImage() {
      if (!activeProduct) return;
      const imagesList = activeProduct.images || (activeProduct.image ? [activeProduct.image] : []);
      
      modalImg.style.opacity = 0;
      setTimeout(() => {
        modalImg.src = imagesList[activeImageIndex];
        modalImg.style.opacity = 1;
      }, 150);

      captionText.textContent = `${activeProduct.name} (${activeImageIndex + 1} / ${imagesList.length})`;

      // Render Thumbnails
      thumbnailsContainer.innerHTML = "";
      if (imagesList.length > 1) {
        imagesList.forEach((imgSrc, idx) => {
          const thumb = document.createElement("img");
          thumb.src = imgSrc;
          thumb.className = `thumb-img ${idx === activeImageIndex ? 'active' : ''}`;
          thumb.addEventListener("click", () => {
            activeImageIndex = idx;
            updateModalImage();
          });
          thumbnailsContainer.appendChild(thumb);
        });
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
      } else {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      }
    }

    function showNext() {
      if (!activeProduct) return;
      const imagesList = activeProduct.images || [activeProduct.image];
      activeImageIndex = (activeImageIndex + 1) % imagesList.length;
      updateModalImage();
    }

    function showPrev() {
      if (!activeProduct) return;
      const imagesList = activeProduct.images || [activeProduct.image];
      activeImageIndex = (activeImageIndex - 1 + imagesList.length) % imagesList.length;
      updateModalImage();
    }

    // Grid Click Delegation
    grid.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-product-id]");
      if (trigger) {
        const prodId = trigger.getAttribute("data-product-id");
        openModal(prodId);
      }
    });

    // Control triggers
    closeBtn.addEventListener("click", closeModal);
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Keyboard support
    document.addEventListener("keydown", (e) => {
      if (modal.classList.contains("show")) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
      }
    });

    // Close on background click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // --- INITIALIZATION ---
  window.addEventListener("DOMContentLoaded", () => {
    // 1. Initial product load
    renderProducts("all");
    initGalleryModal();

    // 2. Tab filtering triggers
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        
        const cat = tab.getAttribute("data-category");
        renderProducts(cat);
      });
    });

    // 3. Update footer and header action numbers dynamic sync
    const footerWa = document.getElementById("footer-wa-link");
    if (footerWa) {
      footerWa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Shiv%20Enterprise,%20I%20am%20interested%20in%20wholesale%20packaging.`;
      footerWa.textContent = "Chat on WhatsApp";
    }

    // 4. Dark/Light Theme Toggler
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    const moonSVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
    const sunSVG = `
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>
    `;

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("shiv_bag_theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      if (themeIcon) themeIcon.innerHTML = sunSVG;
    } else {
      document.body.classList.remove("light-theme");
      if (themeIcon) themeIcon.innerHTML = moonSVG;
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");
        if (isLight) {
          localStorage.setItem("shiv_bag_theme", "light");
          if (themeIcon) themeIcon.innerHTML = sunSVG;
        } else {
          localStorage.setItem("shiv_bag_theme", "dark");
          if (themeIcon) themeIcon.innerHTML = moonSVG;
        }
      });
    }
  });

})();
