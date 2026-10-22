// Centralized API Configuration (Section 23)
    const API_BASE_URL = "http://localhost:8000";

    // Application Data Store (Section 21 & 22)
    const state = {
      currentUser: { name: "User", email: "" },
      isRegisterMode: false,
      evidenceFilter: "All",
      incidents: [
        {
          id: "INC-004",
          type: "Stalking",
          title: "Unknown person following route",
          date: "20 Oct 2026",
          relativeTime: "Yesterday • Offline",
          location: "Rajiv Chowk Metro Exit 4",
          channel: "Offline",
          description: "Offline encounter reported near evening commute route after repeated online messages.",
          status: "Connected",
          evidenceCount: 2
        },
        {
          id: "INC-003",
          type: "Suspicious Contact",
          title: "Second account contacted user",
          date: "18 Oct 2026",
          relativeTime: "3 days ago • Online",
          location: "Instagram DM",
          channel: "Online",
          description: "Second newly created account contacted user referencing daily schedule.",
          status: "Connected",
          evidenceCount: 2
        },
        {
          id: "INC-002",
          type: "Cyber Harassment",
          title: "Repeated unwanted messages",
          date: "15 Oct 2026",
          relativeTime: "Today • Online",
          location: "Instagram / WhatsApp",
          channel: "Online",
          description: "Repeated messages using the same phrasing after blocking the first account.",
          status: "Recorded",
          evidenceCount: 2
        },
        {
          id: "INC-001",
          type: "Cyber Harassment",
          title: "Unknown Instagram account",
          date: "12 Oct 2026",
          relativeTime: "8 days ago • Online",
          location: "Instagram",
          channel: "Online",
          description: "Unwanted messages from unknown account.",
          status: "Recorded",
          evidenceCount: 2
        }
      ],
      evidence: [
        { id: "EV-01", name: "message_screenshot_01.png", category: "Images", date: "18 Oct 2026", incidentId: "Incident #002", status: "Preserved" },
        { id: "EV-02", name: "second_account_profile.png", category: "Images", date: "18 Oct 2026", incidentId: "Incident #003", status: "Preserved" },
        { id: "EV-03", name: "route_cctv_clip.mp4", category: "Videos", date: "20 Oct 2026", incidentId: "Incident #004", status: "Preserved" },
        { id: "EV-04", name: "voicemail_recording_01.mp3", category: "Audio", date: "15 Oct 2026", incidentId: "Incident #002", status: "Preserved" },
        { id: "EV-05", name: "incident_chronology_note.pdf", category: "Documents", date: "20 Oct 2026", incidentId: "Incident #001", status: "Preserved" },
        { id: "EV-06", name: "chat_export_log.pdf", category: "Documents", date: "15 Oct 2026", incidentId: "Incident #002", status: "Preserved" }
      ],
      trustedContacts: [
        { id: "TC-1", name: "Aditi Sharma", relation: "Sister", phone: "+91 98102 44510", status: "Available" },
        { id: "TC-2", name: "Rahul Mehta", relation: "Friend", phone: "+91 98711 39012", status: "Available" },
        { id: "TC-3", name: "Meera Nair", relation: "Flatmate", phone: "+91 99100 88219", status: "Available" },
        { id: "TC-4", name: "Dr. Kavita Rao", relation: "Campus Safety Coordinator", phone: "+91 98188 77001", status: "Available" }
      ],
      cases: [
        {
          id: "NS-2026-001",
          title: "Repeated Online Harassment",
          status: "Active",
          indicators: 3,
          evidence: 8,
          updated: "20 Oct 2026",
          description: "Connected pattern of unwanted messages across multiple accounts transitioning to an offline route encounter."
        },
        {
          id: "NS-2026-002",
          title: "Evening Commute Lighting & Route Concern",
          status: "Active",
          indicators: 1,
          evidence: 2,
          updated: "19 Oct 2026",
          description: "Documentation of unlit stretch near metro exit and civic street-light report."
        }
      ],
      mapAreas: {
        cp: {
          name: "Connaught Place",
          coords: [28.6315, 77.2167],
          context: "Moderate",
          incidents: 12,
          lights: 3,
          police: 2,
          hospitals: 4
        },
        hk: {
          name: "Hauz Khas Village",
          coords: [28.5535, 77.1944],
          context: "Moderate",
          incidents: 8,
          lights: 4,
          police: 2,
          hospitals: 3
        },
        du: {
          name: "North Campus, DU",
          coords: [28.6880, 77.2100],
          context: "Moderate",
          incidents: 9,
          lights: 2,
          police: 3,
          hospitals: 5
        }
      }
    };

    // 6 Core Safety Initiatives for Landing Page Sticky Stack (Exact `safetyforwomen.org` style)
    const initiativesData = [
      {
        number: "1",
        tag: "Step 01 • Report",
        title: "Structured Incident Reporting",
        summary: "Record harassment, stalking, cyber threats, or suspicious contact early with calm, structured guidance.",
        bgImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
        objective: "To help women record safety concerns early—before separate incidents are forgotten or dismissed.",
        bullets: [
          "Categorize harassment, cyber harassment, stalking, or suspicious contact.",
          "Log exact date, time, platform/channel, and location context.",
          "Link screenshots, audio, or notes immediately or at your own pace."
        ],
        ctaLabel: "Open Report Incident Screen",
        targetScreen: "report"
      },
      {
        number: "2",
        tag: "Step 02 • Preserve",
        title: "Private Evidence Vault",
        summary: "Keep screenshots, recordings, and documents organized and linked to specific incidents in one account-scoped vault.",
        bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
        objective: "To preserve critical digital and physical evidence with clear chronological linking to reported incidents.",
        bullets: [
          "Filter by Images, Videos, Audio, and Documents.",
          "Link each file directly to an incident ID (e.g., Incident #002).",
          "Private account-scoped storage without exaggerated technical claims."
        ],
        ctaLabel: "Explore Evidence Vault",
        targetScreen: "evidence"
      },
      {
        number: "3",
        tag: "Step 03 & 04 • Connect & Analyse",
        title: "Incident Intelligence & Pattern Detection",
        summary: "Understand whether separate online and offline incidents contain connected escalation indicators.",
        bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
        objective: "To surface clear, explainable escalation indicators across multiple reports without fear-mongering.",
        bullets: [
          "Detects repeated unwanted contact and multiple accounts.",
          "Highlights frequency shifts and digital-to-offline transitions.",
          "Always explains 'Why am I seeing this warning?' in plain language."
        ],
        ctaLabel: "Inspect Incident Intelligence",
        targetScreen: "intelligence"
      },
      {
        number: "4",
        tag: "Step 05 • Respond",
        title: "Smart Action Navigator & Instant SOS",
        summary: "Clear, non-overwhelming next steps for immediate emergencies, cyber reporting, and Trusted Circle alerts.",
        bgImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80",
        objective: "To provide calm, practical next steps tailored to your situation alongside one-tap emergency SOS.",
        bullets: [
          "One-tap SOS alerts Trusted Circle and shares emergency coordinates.",
          "Informational guidance for cybercrime channels and support helplines.",
          "Clear confirmation states for every emergency action."
        ],
        ctaLabel: "Open Smart Action Navigator",
        targetScreen: "navigator"
      },
      {
        number: "5",
        tag: "Area & Infrastructure Safety",
        title: "Area Safety Map & Civic Hazard Reporting",
        summary: "Explore nearby police stations, hospitals, and area safety context, or report broken street lights and dark spots.",
        bgImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
        objective: "To combine personal safety with community infrastructure audits for well-lit, safer public spaces.",
        bullets: [
          "Interactive OpenStreetMap with Police, Hospital, and Hazard markers.",
          "Transparent 'Safety Context: Moderate' indicators.",
          "Submit civic reports (e.g., Broken Street Light • ID NS-1042)."
        ],
        ctaLabel: "Explore Area Safety Map",
        targetScreen: "safety-map"
      },
      {
        number: "6",
        tag: "Step 06 • Follow-Up",
        title: "Organized Case Management & Trusted Circle",
        summary: "Track active cases from initial report preparation through support outreach and resolution.",
        bgImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
        objective: "To keep all connected incidents, evidence items, and follow-up stages organized in one case file.",
        bullets: [
          "Track Case #NS-2026-001 across 4 clear follow-up milestones.",
          "Manage your Trusted Circle contacts (Sister, Friend, Coordinator).",
          "Built for seamless FastAPI backend integration."
        ],
        ctaLabel: "Open My Cases",
        targetScreen: "cases"
      }
    ];

    // Character-by-character spring text builder (`n` component in reference code)
    function mountSpringText(containerId, text, baseDelay = 0) {
      const el = document.getElementById(containerId);
      if (!el) return;
      el.innerHTML = "";
      const words = text.split(" ");
      let charIndex = 0;
      words.forEach((word) => {
        const wordWrap = document.createElement("span");
        wordWrap.style.display = "inline-flex";
        wordWrap.style.whiteSpace = "nowrap";
        wordWrap.style.marginRight = "0.28em";
        Array.from(word).forEach((ch) => {
          const span = document.createElement("span");
          span.className = "char-spring";
          span.style.animationDelay = `${baseDelay + charIndex * 0.028}s`;
          span.textContent = ch;
          wordWrap.appendChild(span);
          charIndex++;
        });
        el.appendChild(wordWrap);
      });
    }

    // Track mouse spotlight coordinates (--x, --y)
    function trackSpotlight(e, cardEl) {
      if (!cardEl) return;
      const rect = cardEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardEl.style.setProperty("--x", `${x}px`);
      cardEl.style.setProperty("--y", `${y}px`);
    }

    // Global Touch/Click Ripple Feedback
    document.addEventListener("pointerdown", (e) => {
      const wave = document.createElement("div");
      wave.className = "touch-ripple-wave";
      wave.style.width = "44px";
      wave.style.height = "44px";
      wave.style.left = `${e.clientX}px`;
      wave.style.top = `${e.clientY}px`;
      document.body.appendChild(wave);
      setTimeout(() => wave.remove(), 650);
    });

    // Render Sticky Scroll-Stacking Initiative Pill Cards (`z` component in reference)
    function renderLandingInitiatives() {
      const container = document.getElementById("initiativesStackContainer");
      if (!container) return;
      container.innerHTML = initiativesData.map((item, idx) => {
        const topRem = 7.5 + idx * 0.85;
        return `
          <div class="sticky initiative-stack-item transition-all duration-300" data-index="${idx}" style="top: ${topRem}rem; z-index: ${idx + 1};">
            <div onclick="openInitiativeModal(${idx})" onmousemove="trackSpotlight(event, this)" class="sfw-pill-card group w-full">
              <div class="sfw-pill-inner p-5 md:p-9 flex flex-col md:flex-row items-center gap-5 md:gap-8">
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-7 w-full">
                  <!-- Number Circle -->
                  <div class="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 bg-transparent border-[#5a2301] text-[#8a4a3b] group-hover:bg-[#ff0440] group-hover:border-[#ff0440] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(255,4,64,0.5)] transition-all duration-300 shrink-0">
                    <span class="font-display font-black text-xl md:text-3xl">${item.number}</span>
                  </div>

                  <!-- Text Content -->
                  <div class="flex flex-col items-center md:items-start flex-1 text-center md:text-left">
                    <span class="mb-2 px-3 py-1 rounded-full bg-[#8a4a3b]/20 text-[#8a4a3b] text-xs font-bold uppercase tracking-wider border border-[#8a4a3b]/30">
                      ${item.tag}
                    </span>
                    <h3 class="font-display font-bold text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-white to-[#e1d5d5] uppercase">
                      ${item.title}
                    </h3>
                    <p class="text-[#e1d5d5]/65 text-sm md:text-base mt-1.5 max-w-2xl">
                      ${item.summary}
                    </p>
                  </div>

                  <!-- Right Arrow Circle -->
                  <div class="shrink-0">
                    <div class="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ff0440] group-hover:border-[#ff0440] transition-all duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    // Open Split-View Modal (`A` component in reference code)
    function openInitiativeModal(index) {
      if (!state.currentUser || !state.currentUser.email) {
        navigateTo("login");
        showToast("Please login first to access features");
        return;
      }
      const item = initiativesData[index];
      if (!item) return;
      const modalBody = document.getElementById("initiativeModalBody");
      modalBody.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6 h-full items-stretch">
          <!-- Left 35% Crimson Multiply-Blend Image Panel -->
          <div class="w-full md:w-[36%] relative min-h-[260px] md:min-h-[390px] rounded-[2rem] overflow-hidden shrink-0 bg-[#0f0f0f] shadow-2xl">
            <div class="absolute inset-0 z-0 h-full">
              <div class="absolute inset-0 bg-[#ff0440] mix-blend-multiply z-10 opacity-60"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-20"></div>
              <img src="${item.bgImage}" alt="${item.title}" class="w-full h-full object-cover absolute inset-0" />
            </div>
            <div class="absolute inset-0 z-30 flex flex-col items-start pt-5 px-5" style="background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 85%);">
              <span class="mb-4 px-3 py-1 rounded-full bg-[#8a4a3b]/85 text-white text-xs font-bold uppercase tracking-wider border border-[#8a4a3b]/40 backdrop-blur-sm">
                ${item.tag}
              </span>
              <div class="flex flex-row items-start justify-start gap-3 w-full mt-2">
                <div class="w-13 h-13 px-4 py-2 bg-[#ff0440] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,4,64,0.5)] shrink-0">
                  <span class="text-white font-black text-2xl">${item.number}</span>
                </div>
                <h2 class="text-xl lg:text-2xl font-bold text-white leading-tight uppercase tracking-wide">
                  ${item.title}
                </h2>
              </div>
            </div>
          </div>

          <!-- Vertical Dotted Copper Divider -->
          <div class="hidden md:block w-px border-l-2 border-dotted border-[#a84f3b] opacity-40 my-6"></div>

          <!-- Right 60% Details & Action Links -->
          <div class="w-full md:w-[60%] flex flex-col justify-center space-y-5 py-2 md:pl-3">
            <div>
              <h3 class="text-[#a84f3b] font-semibold uppercase text-sm tracking-wider mb-1">Objective</h3>
              <p class="text-[#e1d5d5] leading-relaxed text-sm sm:text-base">${item.objective}</p>
            </div>
            <div>
              <h3 class="text-[#a84f3b] font-semibold uppercase text-sm tracking-wider mb-2">Key Capabilities</h3>
              <ul class="list-disc pl-5 space-y-1.5 text-[#e1d5d5] marker:text-[#8a4a3b] text-sm sm:text-base">
                ${item.bullets.map(b => `<li>${b}</li>`).join("")}
              </ul>
            </div>
            <div class="pt-3">
              <button onclick="closeInitiativeModal(); openAppScreen('${item.targetScreen}')" class="group inline-flex items-center gap-2.5 text-[#2DD4BF] font-bold text-sm sm:text-base hover:text-[#2DD4BF]/80 transition-colors">
                <svg class="w-7 h-7 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
                <span class="underline decoration-2 tracking-wider underline-offset-4 uppercase">${item.ctaLabel}</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.getElementById("initiativeModalBackdrop").classList.remove("hidden");
      lucide.createIcons();
    }

    function closeInitiativeModal() {
      document.getElementById("initiativeModalBackdrop").classList.add("hidden");
    }

    // Render 14-Row Alternating Marquee Backdrop (`k` component)
    function renderPledgeMarqueeRows() {
      const container = document.getElementById("pledgeRowsBackdrop");
      if (!container) return;
      let rowsHtml = "";
      for (let s = 0; s < 14; s++) {
        const dirClass = s % 2 === 0 ? "animate-scroll-right" : "animate-scroll-left";
        let itemsHtml = "";
        for (let a = 0; a < 12; a++) {
          const isEven = (s + a) % 2 === 0;
          const textStyle = isEven
            ? "font-semibold text-base sm:text-xl uppercase tracking-[0.35em]"
            : "text-sm sm:text-lg font-medium";
          const label = isEven ? "PREVENT • RESPOND • PRESERVE • ACT" : "Take the Nirbhaya Safety Pledge";
          itemsHtml += `<div class="w-auto flex-shrink-0 mx-5 flex items-center text-black ${textStyle}">${label}</div>`;
        }
        rowsHtml += `
          <div class="flex-1 flex items-center overflow-hidden">
            <div class="flex w-fit ${dirClass}">${itemsHtml}</div>
          </div>
        `;
      }
      container.innerHTML = rowsHtml;
    }

    // Render Partner & Helpline Carousel (`d` component)
    function renderPartnerCloud() {
      const partners = [
        { code: "112", name: "National Emergency Response", sub: "24x7 All-India Emergency" },
        { code: "181", name: "Women Helpline India", sub: "Crisis & Support Response" },
        { code: "1930", name: "National Cybercrime Portal", sub: "Digital Harassment Reporting" },
        { code: "1091", name: "Women Police Helpline", sub: "Direct Police Dispatch" },
        { code: "NCW", name: "24x7 Women Support Cell", sub: "Counselling & Guidance" },
        { code: "ONE-STOP", name: "Sakhi One Stop Centres", sub: "Medical & Shelter Support" }
      ];
      const track = document.getElementById("partnerCloudTrack");
      if (!track) return;
      const repeated = [...partners, ...partners, ...partners];
      track.innerHTML = repeated.map((p) => `
        <div onclick="openAppScreen('navigator')" class="flex-shrink-0 w-64 h-28 flex flex-col items-center justify-center bg-gradient-to-br from-[#2a100e] to-black rounded-2xl p-4 shadow-lg hover:bg-[#e1d5d5] hover:from-[#e1d5d5] hover:to-[#e1d5d5] hover:scale-105 transition-all duration-300 group border border-[#5a2301]/40 cursor-pointer text-center">
          <span class="text-xl font-display font-black text-[#ff0440] group-hover:text-black transition-colors">${p.code}</span>
          <span class="text-sm font-bold text-white group-hover:text-black mt-1 transition-colors">${p.name}</span>
          <span class="text-[11px] text-[#e1d5d5]/60 group-hover:text-neutral-700 transition-colors">${p.sub}</span>
        </div>
      `).join("");
    }

    // Hero Slideshow Interval + Scroll Parallax
    let currentSlideIdx = 0;
    function startHeroSlideshow() {
      const slides = document.querySelectorAll("#heroSlidesContainer .hero-slide");
      if (!slides.length) return;
      setInterval(() => {
        slides[currentSlideIdx].style.opacity = "0";
        currentSlideIdx = (currentSlideIdx + 1) % slides.length;
        slides[currentSlideIdx].style.opacity = "0.65";
      }, 3500);
    }

    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      const heroBox = document.getElementById("heroParallaxBox");
      if (heroBox && y < window.innerHeight) {
        const scale = 1 + y / 1400;
        const opacity = Math.max(0, 1 - Math.max(0, y - 140) / 480);
        heroBox.style.transform = `scale(${scale})`;
        heroBox.style.opacity = opacity;
      }
    }, { passive: true });

    // Top-Level View Navigation (Landing | Login | App)
    function navigateTo(view) {
      document.getElementById("view-landing").classList.add("hidden");
      document.getElementById("view-login").classList.add("hidden");
      document.getElementById("view-app").classList.add("hidden");

      const publicNav = document.getElementById("publicNavLinks");
      const authControls = document.getElementById("authHeaderControls");
      const signInBtn = document.getElementById("headerSignInBtn");
      const userBadge = document.getElementById("headerUserBadge");

      if (view === "landing") {
        document.getElementById("view-landing").classList.remove("hidden");
        publicNav.classList.remove("hidden");
        authControls.classList.add("hidden");
        signInBtn.classList.remove("hidden");
        userBadge.classList.add("hidden");
      } else if (view === "login") {
        document.getElementById("view-login").classList.remove("hidden");
        publicNav.classList.add("hidden");
        authControls.classList.add("hidden");
      } else if (view === "app") {
        document.getElementById("view-app").classList.remove("hidden");
        publicNav.classList.add("hidden");
        authControls.classList.remove("hidden");
        authControls.classList.add("flex");
        signInBtn.classList.add("hidden");
        userBadge.classList.remove("hidden");
        userBadge.classList.add("flex");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Get Started entry point: require login before opening the safety dashboard.
    function requestStartedAccess() {
      if (!state.currentUser || !state.currentUser.email) {
        navigateTo("login");
        showToast("Please login first to get started");
        return;
      }
      openAppScreen("dashboard");
    }

    // SDG cards require login before opening their linked feature.
    function requestSDGAccess(screenId) {
      if (!state.currentUser || !state.currentUser.email) {
        navigateTo("login");
        showToast("Please login first to access SDG features");
        return;
      }
      openAppScreen(screenId);
    }

    // SOS entry point: never auto-sign-in or show the dashboard for a logged-out visitor.
    function requestSOSAccess() {
      if (!state.currentUser || !state.currentUser.email) {
        navigateTo("login");
        showToast("Please login first to use SOS");
        return;
      }
      openAppScreen("sos");
    }

    // Open Specific Authenticated Screen
    let leafletMap = null;
    function openAppScreen(screenId) {
      // All app features require sign-in; never auto-open the dashboard for logged-out visitors.
      if (!state.currentUser || !state.currentUser.email) {
        showToast(screenId === "sos" ? "Please login first to use SOS" : "Please login first to access features");
        navigateTo("login");
        return;
      }
      navigateTo("app");
      document.querySelectorAll(".app-screen").forEach(el => el.classList.add("hidden"));
      const target = document.getElementById(`screen-${screenId}`);
      if (target) target.classList.remove("hidden");

      // Highlight Sidebar Item
      document.querySelectorAll(".app-nav-btn").forEach(btn => {
        if (btn.dataset.nav === screenId) {
          btn.className = "app-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold bg-[#ff0440] text-white shadow-[0_0_20px_rgba(255,4,64,0.4)] transition-all";
        } else {
          btn.className = "app-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-[#e1d5d5]/75 hover:bg-white/5 hover:text-white transition-all";
        }
      });

      if (screenId === "safety-map") {
        setTimeout(initSafetyMap, 120);
      }
      renderAllAppViews();
      lucide.createIcons();
    }

    // Auth Login / Register Handler
    function toggleAuthMode() {
      state.isRegisterMode = !state.isRegisterMode;
      document.getElementById("registerNameField").classList.toggle("hidden", !state.isRegisterMode);
      document.getElementById("authTitle").textContent = state.isRegisterMode ? "Create Your Safety Account" : "Welcome Back";
      document.getElementById("authSubmitBtnText").textContent = state.isRegisterMode ? "Create Account & Continue" : "Login to Safety Workspace";
      document.getElementById("authToggleBtnText").textContent = state.isRegisterMode ? "Already have an account? Login" : "Create Account";
    }

    function handleAuthSubmit(e) {
      e.preventDefault();
      const nameInput = document.getElementById("authNameInput");
      const emailVal = document.getElementById("authEmailInput").value.trim();
      const passwordVal = document.getElementById("authPasswordInput").value;
      if (!emailVal || !passwordVal || (state.isRegisterMode && !nameInput.value.trim())) {
        showToast("Please enter your login details first");
        return;
      }
      const nameVal = (state.isRegisterMode ? nameInput.value.trim() : "") || emailVal.split("@")[0] || "User";
      state.currentUser.name = nameVal;
      state.currentUser.email = emailVal;
      document.getElementById("dashboardUserName").textContent = nameVal;
      document.getElementById("navUserName").textContent = nameVal;
      document.getElementById("navUserInitial").textContent = nameVal.charAt(0).toUpperCase();
      showToast(`Signed in as ${nameVal}`);
      openAppScreen("dashboard");
    }

    // Render Dynamic Views (Dashboard, Intelligence, Evidence, Timeline, Trusted Circle, Cases)
    function renderAllAppViews() {
      // Metrics
      document.getElementById("metricActiveCases").textContent = state.cases.length;
      document.getElementById("metricEvidenceCount").textContent = state.evidence.length + 2;
      document.getElementById("metricTrustedCount").textContent = state.trustedContacts.length;
      document.getElementById("timelineConnectedCount").textContent = state.incidents.length;

      // Dashboard Recent Incidents
      const recentList = document.getElementById("dashboardRecentIncidentsList");
      if (recentList) {
        recentList.innerHTML = state.incidents.slice(0, 3).map(inc => `
          <div onclick="openAppScreen('timeline')" class="p-4 rounded-2xl bg-black/70 border border-white/10 hover:border-[#ff0440]/50 flex items-center justify-between gap-4 cursor-pointer transition-all">
            <div>
              <h4 class="text-sm font-bold text-white">${inc.title}</h4>
              <p class="text-xs text-[#e1d5d5]/60 mt-0.5">${inc.relativeTime} • ${inc.type}</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-white/5 text-[11px] font-semibold text-[#2DD4BF]">${inc.evidenceCount} files</span>
          </div>
        `).join("");
      }

      // Intelligence Connected Chain
      const chainEl = document.getElementById("intelligenceChainContainer");
      if (chainEl) {
        const chronological = [...state.incidents].reverse();
        chainEl.innerHTML = chronological.map((inc, idx) => `
          <div class="p-4 rounded-2xl bg-black border border-[#8a4a3b]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-xs font-bold text-[#ff0440]">Incident #00${idx + 1} • ${inc.date}</span>
              <h4 class="text-sm sm:text-base font-bold text-white">${inc.title}</h4>
              <p class="text-xs text-[#e1d5d5]/70">${inc.description}</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-white/5 text-xs text-[#2DD4BF] self-start sm:self-center">${inc.channel}</span>
          </div>
          ${idx < chronological.length - 1 ? `<div class="text-center text-[#ff0440] font-black text-lg py-0.5">↓</div>` : ""}
        `).join("");
      }

      // Evidence Vault
      const evGrid = document.getElementById("evidenceVaultGrid");
      if (evGrid) {
        const filtered = state.evidenceFilter === "All"
          ? state.evidence
          : state.evidence.filter(e => e.category === state.evidenceFilter);
        evGrid.innerHTML = filtered.map(item => `
          <div class="p-5 rounded-2xl bg-black border border-[#8a4a3b]/35 flex flex-col justify-between gap-4">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#ff0440]/15 border border-[#ff0440]/40 flex items-center justify-center text-[#ff0440] font-bold text-xs">
                  ${item.category.slice(0, 3).toUpperCase()}
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white break-all">${item.name}</h4>
                  <p class="text-xs text-[#e1d5d5]/60">${item.date} • ${item.incidentId}</p>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-[#2DD4BF]/15 text-[#2DD4BF] text-[10px] font-bold uppercase">${item.status}</span>
            </div>
            <div class="flex items-center gap-2 pt-2 border-t border-white/10">
              <button onclick="showToast('Previewing ${item.name}')" class="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white">View</button>
              <button onclick="showToast('Linked ${item.name} to active case')" class="px-3.5 py-1.5 rounded-full border border-[#2DD4BF]/40 text-xs font-semibold text-[#2DD4BF]">Link to Incident</button>
              <button onclick="deleteEvidenceItem('${item.id}')" class="ml-auto px-3 py-1.5 rounded-full text-xs text-red-400 hover:bg-red-500/10">Delete</button>
            </div>
          </div>
        `).join("");
      }

      // Vertical Timeline
      const timelineEl = document.getElementById("verticalTimelineList");
      if (timelineEl) {
        timelineEl.innerHTML = state.incidents.map(inc => `
          <div class="relative bg-black border border-[#8a4a3b]/40 rounded-2xl p-5 space-y-2">
            <span class="w-3.5 h-3.5 rounded-full bg-[#ff0440] absolute -left-[31px] top-6 border-2 border-black"></span>
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-bold text-[#ff0440] uppercase tracking-wider">${inc.date} • ${inc.type}</span>
              <span class="px-2.5 py-0.5 rounded-full bg-[#2DD4BF]/15 text-[#2DD4BF] text-xs font-semibold">${inc.status}</span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-white">${inc.title}</h3>
            <p class="text-xs sm:text-sm text-[#e1d5d5]/75">${inc.description}</p>
            <div class="pt-2 flex items-center justify-between">
              <span class="text-xs text-[#e1d5d5]/60">Evidence attached: ${inc.evidenceCount} items</span>
              <button onclick="openAppScreen('case-detail')" class="px-4 py-1.5 rounded-full bg-white/10 hover:bg-[#ff0440] text-xs font-semibold text-white transition-colors">Open Incident →</button>
            </div>
          </div>
        `).join("");
      }

      // Trusted Circle
      const tcGrid = document.getElementById("trustedContactsGrid");
      if (tcGrid) {
        tcGrid.innerHTML = state.trustedContacts.map(tc => `
          <div class="p-5 rounded-2xl bg-black border border-[#8a4a3b]/40 flex items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <h4 class="text-base font-bold text-white">${tc.name}</h4>
                <span class="px-2.5 py-0.5 rounded-full bg-[#2DD4BF]/15 text-[#2DD4BF] text-[10px] font-bold">${tc.status}</span>
              </div>
              <p class="text-xs text-[#e1d5d5]/70">${tc.relation} • ${tc.phone}</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="showToast('Check-in alert sent to ${tc.name}')" class="px-3.5 py-1.5 rounded-full bg-[#2DD4BF] text-black text-xs font-bold">Notify</button>
              <button onclick="removeTrustedContact('${tc.id}')" class="px-3 py-1.5 rounded-full bg-white/5 hover:bg-red-500/20 text-xs text-red-400">Remove</button>
            </div>
          </div>
        `).join("");
      }

      // Cases List
      const casesGrid = document.getElementById("casesListContainer");
      if (casesGrid) {
        casesGrid.innerHTML = state.cases.map(c => `
          <div class="p-6 rounded-3xl bg-black border border-[#8a4a3b]/40 space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#ff0440] uppercase">Case #${c.id}</span>
              <span class="px-3 py-1 rounded-full bg-[#2DD4BF]/15 text-[#2DD4BF] text-xs font-bold">${c.status}</span>
            </div>
            <h3 class="text-xl font-bold text-white">${c.title}</h3>
            <p class="text-xs sm:text-sm text-[#e1d5d5]/75">${c.description}</p>
            <div class="grid grid-cols-3 gap-2 pt-2 text-center">
              <div class="p-2 rounded-xl bg-white/5">
                <span class="text-[11px] text-[#e1d5d5]/60 block">Indicators</span>
                <span class="text-sm font-bold text-amber-400">${c.indicators}</span>
              </div>
              <div class="p-2 rounded-xl bg-white/5">
                <span class="text-[11px] text-[#e1d5d5]/60 block">Evidence</span>
                <span class="text-sm font-bold text-white">${c.evidence}</span>
              </div>
              <div class="p-2 rounded-xl bg-white/5">
                <span class="text-[11px] text-[#e1d5d5]/60 block">Updated</span>
                <span class="text-xs font-bold text-[#2DD4BF]">${c.updated}</span>
              </div>
            </div>
            <div class="pt-2 flex gap-3">
              <button onclick="openAppScreen('case-detail')" class="flex-1 py-2.5 rounded-full bg-[#ff0440] text-white text-xs font-bold">Open Case</button>
              <button onclick="openAppScreen('timeline')" class="flex-1 py-2.5 rounded-full border border-white/20 text-white text-xs font-bold hover:bg-white/10">View Timeline</button>
            </div>
          </div>
        `).join("");
      }
    }

    // Incident Form Handlers
    function selectIncidentType(type, btn) {
      document.getElementById("incTypeValue").value = type;
      document.querySelectorAll(".incident-type-pill").forEach(el => {
        el.className = "incident-type-pill px-4 py-3 rounded-2xl border border-white/15 bg-black text-[#e1d5d5] text-xs font-semibold text-left hover:border-[#8a4a3b]";
      });
      btn.className = "incident-type-pill px-4 py-3 rounded-2xl border border-[#ff0440] bg-[#ff0440]/20 text-white text-xs font-semibold text-left";
    }

    function previewSelectedEvidence(input) {
      const label = document.getElementById("incSelectedFileLabel");
      if (input.files && input.files.length > 0) {
        label.textContent = `${input.files.length} file(s) attached: ${Array.from(input.files).map(f => f.name).join(", ")}`;
      }
    }

    function handleSaveIncident(e) {
      e.preventDefault();
      const type = document.getElementById("incTypeValue").value;
      const desc = document.getElementById("incDescription").value.trim();
      const loc = document.getElementById("incLocation").value.trim();
      const channel = document.getElementById("incPlatform").value.trim() || "Online";

      state.incidents.unshift({
        id: `INC-00${state.incidents.length + 1}`,
        type,
        title: desc.slice(0, 48) + (desc.length > 48 ? "..." : ""),
        date: "22 Oct 2026",
        relativeTime: "Just now • " + channel,
        location: loc,
        channel,
        description: desc,
        status: "Recorded",
        evidenceCount: 1
      });

      document.getElementById("incidentSavedBanner").classList.remove("hidden");
      renderAllAppViews();
      showToast("Incident saved to your private timeline");
    }

    // Evidence Filters & Upload
    function filterEvidence(cat) {
      state.evidenceFilter = cat;
      document.querySelectorAll(".evidence-filter-btn").forEach(btn => {
        if (btn.textContent === cat) {
          btn.className = "evidence-filter-btn px-4 py-2 rounded-full text-xs font-bold bg-[#ff0440] text-white";
        } else {
          btn.className = "evidence-filter-btn px-4 py-2 rounded-full text-xs font-bold bg-white/5 text-[#e1d5d5] hover:bg-white/10";
        }
      });
      renderAllAppViews();
    }

    function openAddEvidenceModal() {
      const fileName = prompt("Enter evidence file name (e.g., screenshot_oct22.png):", "screenshot_oct22.png");
      if (!fileName) return;
      state.evidence.unshift({
        id: `EV-0${state.evidence.length + 1}`,
        name: fileName,
        category: "Images",
        date: "22 Oct 2026",
        incidentId: "Incident #004",
        status: "Preserved"
      });
      renderAllAppViews();
      showToast(`Added ${fileName} to Evidence Vault`);
    }

    function deleteEvidenceItem(id) {
      state.evidence = state.evidence.filter(e => e.id !== id);
      renderAllAppViews();
      showToast("Evidence item removed");
    }

    // SOS Confirmation Flow
    function triggerSOSFlow() {
      const panel = document.getElementById("sosConfirmationPanel");
      panel.classList.remove("hidden");
      showToast("SOS Activated — Trusted Circle & Location Dispatched");
    }

    function resetSOSFlow() {
      document.getElementById("sosConfirmationPanel").classList.add("hidden");
      showToast("SOS stood down");
    }

    function triggerQuickLocationShare() {
      showToast("Live location shared with your 4 Trusted Contacts");
    }

    // Trusted Circle Modal Handlers
    function openTrustedContactModal() {
      document.getElementById("trustedContactModal").classList.remove("hidden");
    }
    function closeTrustedContactModal() {
      document.getElementById("trustedContactModal").classList.add("hidden");
    }
    function handleAddTrustedContact(e) {
      e.preventDefault();
      const name = document.getElementById("tcName").value.trim();
      const relation = document.getElementById("tcRelation").value.trim();
      const phone = document.getElementById("tcPhone").value.trim();
      state.trustedContacts.push({
        id: `TC-${Date.now()}`,
        name,
        relation,
        phone,
        status: "Available"
      });
      closeTrustedContactModal();
      renderAllAppViews();
      showToast(`${name} added to your Trusted Circle`);
    }
    function removeTrustedContact(id) {
      state.trustedContacts = state.trustedContacts.filter(c => c.id !== id);
      renderAllAppViews();
      showToast("Contact removed from Trusted Circle");
    }

    // Safety Map Initialization (Leaflet)
    function initSafetyMap() {
      const mapEl = document.getElementById("leafletSafetyMap");
      if (!mapEl) return;
      if (leafletMap) {
        leafletMap.invalidateSize();
        return;
      }
      leafletMap = L.map("leafletSafetyMap").setView([28.6315, 77.2167], 14);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
      }).addTo(leafletMap);

      const markers = [
        { coords: [28.6328, 77.2197], title: "Connaught Place Police Station • Active Patrol" },
        { coords: [28.6289, 77.2145], title: "Ram Manohar Lohia Hospital • 24x7 Emergency" },
        { coords: [28.6341, 77.2152], title: "Street Light Issue Reported • Report #NS-1042" },
        { coords: [28.6302, 77.2210], title: "PCR Emergency Van Point • Verified" }
      ];
      markers.forEach(m => {
        L.marker(m.coords).addTo(leafletMap).bindPopup(`<strong>${m.title}</strong>`);
      });
    }

    function selectMapArea(areaKey) {
      const area = state.mapAreas[areaKey];
      if (!area) return;
      document.getElementById("mapAreaTitle").textContent = area.name;
      document.getElementById("mapStatIncidents").textContent = area.incidents;
      document.getElementById("mapStatLights").textContent = area.lights;
      document.getElementById("mapStatPolice").textContent = area.police;
      document.getElementById("mapStatHospitals").textContent = area.hospitals;
      if (leafletMap) {
        leafletMap.setView(area.coords, 14);
      }
    }

    // Civic Report Handler
    function handleCivicReportSubmit(e) {
      e.preventDefault();
      const randId = "NS-" + Math.floor(1042 + Math.random() * 900);
      document.getElementById("civicReportIdText").textContent = randId;
      document.getElementById("civicConfirmBox").classList.remove("hidden");
      showToast(`Community safety report ${randId} submitted`);
    }

    // Case Follow-up Stage Handler
    function setFollowUpStage(stageIndex) {
      showToast(`Case #NS-2026-001 follow-up updated to Stage ${stageIndex + 1}`);
    }

    // Search Filter
    function handleGlobalSearch(query) {
      if (!query || query.length < 2) return;
      const q = query.toLowerCase();
      if (q.includes("map") || q.includes("connaught")) openAppScreen("safety-map");
      else if (q.includes("sos") || q.includes("help")) openAppScreen("sos");
      else if (q.includes("evidence") || q.includes("screenshot")) openAppScreen("evidence");
      else if (q.includes("case")) openAppScreen("cases");
    }

    function toggleNotificationDrawer() {
      showToast("3 connected escalation indicators ready for review in Incident Intelligence");
    }

    // Toast Utility
    function showToast(msg) {
      const toast = document.getElementById("toastBanner");
      document.getElementById("toastMessage").textContent = msg;
      toast.classList.remove("hidden");
      toast.classList.add("flex");
      clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(() => {
        toast.classList.add("hidden");
        toast.classList.remove("flex");
      }, 3200);
    }

    // Initialize Everything on DOM Load
    window.addEventListener("DOMContentLoaded", () => {
      mountSpringText("heroSpringTagline", "PREVENT. RESPOND. PRESERVE. ACT.", 0.05);
      mountSpringText("heroSpringMain1", "A Safer India", 0.28);
      mountSpringText("heroSpringMain2", "for Women", 0.52);
      renderLandingInitiatives();
      renderPledgeMarqueeRows();
      renderPartnerCloud();
      startHeroSlideshow();
      renderAllAppViews();
      lucide.createIcons();
    });
