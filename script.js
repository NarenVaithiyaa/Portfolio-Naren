// Disable browser's scroll restoration immediately
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Multiple approaches to ensure page loads at top
        function forceScrollToTop() {
            // Clear any hash in URL
            if (window.location.hash) {
                history.replaceState(null, null, window.location.pathname + window.location.search);
            }
            
            // Force scroll to top with multiple methods
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            
            // Ensure scroll position is maintained
            setTimeout(() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }, 50);
        }

        // Call immediately when script loads
        forceScrollToTop();

        console.log("Script started - forced scroll to top"); // Debugging log

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Function to initialize all animations after page load
        function initializeAnimations() {
            // Initialize EmailJS
            initializeEmailJS();
            
            // Initialize contact form
            initializeContactForm();
            
            // Initialize scrolling text effect
            initializeScrollingText();
            
            // Hero section animations (initial load)
            gsap.from(".hero-profile-pic", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
            gsap.from("#hero h1", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.2 });
            gsap.from("#hero p", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.4 });

            // Mouse scroll animation
            gsap.to(".mouse-wheel", {
                y: 10,
                repeat: -1, // Infinite repeat
                yoyo: true, // Go back and forth
                ease: "power1.inOut",
                duration: 0.8,
                delay: 1 // Start after other hero animations
            });
            gsap.to(".mouse-scroll-container", {
                opacity: 1,
                duration: 0.5,
                delay: 0.8 // Fade in the container after other hero animations
            });

            // About Section Animations
            gsap.from(".about-heading", {
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 80%", // When the top of the trigger hits 80% down the viewport
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Animation for the new flip card (now .about-card)
            gsap.from(".about-card", {
                scrollTrigger: {
                    trigger: ".about-card",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
                delay: 0.2
            });

            gsap.from(".about-text-container", {
                scrollTrigger: {
                    trigger: ".about-text-container",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                x: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            // Skills Section Animations (Original Grid)
            gsap.from(".skills-heading", {
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".skills-grid .skill-card", { // Target individual skill cards in the grid
                scrollTrigger: {
                    trigger: ".skills-grid",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.1, // Animate each card with a slight delay
                ease: "back.out(1.7)"
            });


            // Projects Section Animations (now targeting the new .card)
            gsap.from(".projects-grid .retro-project-card", { /* Target the original .retro-project-card for projects */
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0, /* Added opacity for a fade-in effect */
                duration: 0.8,
                stagger: 0.2, // Animate each project card with a slight delay
                ease: "power3.out"
            });

            // Retrominal Section Animation (New)
            gsap.from("#retrominal h2", {
                scrollTrigger: {
                    trigger: "#retrominal",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
            gsap.from(".interactive-terminal", {
                scrollTrigger: {
                    trigger: ".interactive-terminal",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
                delay: 0.2
            });


            // Contact Section Animations
            gsap.from(".contact-heading", {
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".contact-form", {
                scrollTrigger: {
                    trigger: ".contact-form",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
                delay: 0.2
            });

            // Timeline ScrollTrigger Animation with dot glow effects
            gsap.to(".timeline-line-fill", {
                height: "100%", // Animate height to full
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline", // The main timeline container
                    start: "top center", // When the top of the timeline hits the center of the viewport
                    end: "bottom center", // When the bottom of the timeline hits the center
                    scrub: true, // Link animation directly to scroll position
                    onUpdate: function(self) {
                        // Calculate which dots should be active based on progress
                        const progress = self.progress;
                        const timelineItems = document.querySelectorAll('.timeline-item');
                        const totalItems = timelineItems.length;
                        
                        timelineItems.forEach((item, index) => {
                            const dot = item.querySelector('.timeline-dot');
                            const itemProgress = (index + 1) / totalItems;
                            
                            // Activate dot glow when progress reaches this item
                            if (progress >= itemProgress) {
                                dot.classList.add('active');
                            } else {
                                dot.classList.remove('active');
                            }
                        });
                    }
                }
            });
        }


        // Canvas Dot Animation
        let canvas, ctx, dots = [];
        const numDots = 25; // Reduced from 50 to 25 for better performance
        const dotColor = 'rgba(74, 74, 74, 0.6)'; // Darker, semi-transparent gray

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight; // Make canvas height match scrollable content
            // Reinitialize dots on resize to distribute them correctly
            dots = [];
            for (let i = 0; i < numDots; i++) {
                dots.push(new Dot());
            }
        }

        class Dot {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 2 + 1; // Random radius between 1 and 3
                this.vx = (Math.random() - 0.5) * 0.5; // Small random velocity
                this.vy = (Math.random() - 0.5) * 0.5;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = dotColor;
                ctx.fill();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off walls
                if (this.x < 0 || this.x > canvas.width) {
                    this.vx *= -1;
                }
                if (this.y < 0 || this.y > canvas.height) {
                    this.vy *= -1;
                }
            }
        }

        let lastTime = 0;
        const targetFPS = 30; // Limit to 30 FPS for better performance
        const frameInterval = 1000 / targetFPS;

        function animateDots(currentTime) {
            if (currentTime - lastTime >= frameInterval) {
                // Draw the main retro background color on the canvas
                ctx.fillStyle = '#F0EAD6';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                dots.forEach(dot => {
                    dot.update();
                    dot.draw();
                });
                
                lastTime = currentTime;
            }
            requestAnimationFrame(animateDots);
        }

        // Pop-up JavaScript functions
        function openPopup() {
            const popup = document.getElementById('myPopup');
            popup.classList.add('is-open');
        }

        function closePopup() {
            const popup = document.getElementById('myPopup');
            popup.classList.remove('is-open');
        }

        // --- Loading Screen Logic ---
        const loadingTextElement = document.getElementById('loading-text-content');
        const textToType = "Loading...";
        let charIndex = 0;
        const typingSpeed = 150; // Milliseconds per character

        function typeWriter() {
            if (charIndex < textToType.length) {
                loadingTextElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Once typing is complete, wait a moment then hide the loading screen
                setTimeout(() => {
                    const loadingScreen = document.getElementById('loading-screen');
                    loadingScreen.classList.add('hidden'); // Start fade out

                    // Wait for the loading screen's fade-out transition to complete (0.5s)
                    // and then some extra time to be safe.
                    setTimeout(() => {
                        // Initialize canvas and animations after loading screen is fully hidden
                        canvas = document.getElementById('dotCanvas');
                        ctx = canvas.getContext('2d');
                        resizeCanvas();
                        animateDots(0); // Pass initial time
                        window.addEventListener('resize', resizeCanvas);

                        // Initialize other GSAP animations
                        initializeAnimations();

                        // Append the initial terminal message
                        appendInitialTerminalMessage();

                        // Ensure we are at the hero section after everything is loaded and settled
                        forceScrollToTop(); // Use our enhanced scroll function
                        const heroSection = document.getElementById('hero');
                        if (heroSection) {
                            heroSection.scrollIntoView({ behavior: 'instant', block: 'start' });
                        }
                        // Double-check scroll position after a brief delay
                        setTimeout(() => {
                            forceScrollToTop();
                        }, 100);
                    }, 600); // 500ms for transition + 100ms buffer

                }, 1000); // Initial delay after typing
            }
        }

        // --- Interactive Terminal Logic ---
        let terminalOutput; 
        let terminalInput;   
        let terminalEnterButton; 
        let isTerminalStarted = false; // New state variable

        const funFacts = [
            "8.2 billion people on earth, yet i'm single :(",
            "I know 4 languages. Tamil, English, Hindi and French !",
            "I was the school topper in French for 2 consecutive years at school !",
            "I completed this website overnight !",
            "I started Leetcode only at my pre-final year !!!",
            "I read a lot. Glad if you'd gift me one :)",
            "CSK losses are very personal.",
            "Though i read a lot, i seldom visit my college library.",
            "I travel 50kms daily from & to college.",
            "Favourite transport is bus.",
            "I'm a district-level spell-bee player !",
            "I've functioned as the CAPTAIN of my school football team for an academic year !. I took my team to the finals of a football tournament! ",
            "I'm born and raised in Coimbatore. Coimbatore mappillai-nga !",
            "if(city=='Coimbatore') return 'Heaven'. Enga ooru thaaru maaru !"
        ];
        let currentFactIndex = -1; // Keep track of the last displayed fact index
        const factTypingSpeed = 50; // Speed for typing out facts

        function appendLineToTerminal(text, className = '') {
            if (!terminalOutput) {
                console.error("terminalOutput element is not found!");
                return;
            }
            const line = document.createElement('span');
            line.classList.add('typed-line');
            if (className) {
                line.classList.add(className);
            }
            line.textContent = text; // Set text directly, no typing effect for initial lines
            terminalOutput.appendChild(line);
            terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom
            return line;
        }

        function typeSingleFact(factText) {
            const lineElement = appendLineToTerminal(''); // Create empty span for typing
            let charPos = 0;
            const typingInterval = setInterval(() => {
                if (charPos < factText.length) {
                    lineElement.textContent += factText.charAt(charPos);
                    charPos++;
                    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Keep scrolling
                } else {
                    clearInterval(typingInterval);
                }
            }, factTypingSpeed);
        }

        function displayNextFact() {
            currentFactIndex = (currentFactIndex + 1) % funFacts.length; // Increment and loop
            typeSingleFact(funFacts[currentFactIndex]);
        }

        function handleCommand() {
            const command = terminalInput.value.trim().toLowerCase();
            terminalInput.value = ''; // Clear input immediately

            appendLineToTerminal(`retroportfolio@naren> ${command}`); // Echo the command with new prompt

            if (command === 'npm start') {
                isTerminalStarted = true; // Terminal is now started
                terminalOutput.innerHTML = ''; // Clear previous output for fresh facts
                appendLineToTerminal("Starting fun fact generator...");
                
                // Select and display one random fact
                const randomIndex = Math.floor(Math.random() * funFacts.length);
                currentFactIndex = randomIndex; // Set current index to the random one
                const randomFact = funFacts[randomIndex];
                
                setTimeout(() => {
                    typeSingleFact(randomFact);
                }, 1000); // Start typing fact after a short delay
            } else if (command === 'next') {
                if (!isTerminalStarted) {
                    console.log("Attempted 'next' before 'npm start'."); // Debugging log
                    appendLineToTerminal("Error: Please start the terminal first using 'npm start'.", 'error-message');
                    return;
                }
                terminalOutput.innerHTML = ''; // Clear previous output
                appendLineToTerminal("Displaying next fun fact...");
                setTimeout(() => {
                    displayNextFact();
                }, 500); // Short delay before showing next fact
            }
            else if (command === 'clear') {
                if (!isTerminalStarted) {
                    console.log("Attempted 'clear' before 'npm start'."); // Debugging log
                    appendLineToTerminal("Error: Please start the terminal first using 'npm start'.", 'error-message');
                    return;
                }
                terminalOutput.innerHTML = ''; // Clear all content
                appendInitialTerminalMessage(); // Reset to initial message
            }
            else {
                appendLineToTerminal(`Error: '${command}' is not recognized as an internal or external command.`, 'error-message');
            }
            terminalOutput.scrollTop = terminalOutput.scrollHeight; // Ensure scroll to bottom
        }

        function appendInitialTerminalMessage() {
            console.log("appendInitialTerminalMessage called!"); // Debugging log
            if (!terminalOutput) {
                console.error("terminalOutput is null when trying to append initial message!");
                return;
            }
            terminalOutput.innerHTML = ''; // Clear existing content
            appendLineToTerminal('Welcome to retrominal !');
            appendLineToTerminal('The commands are:');
            appendLineToTerminal('  npm start - starts the retrominal & reveals a fun fact about me');
            appendLineToTerminal('  next      - reveal the next fact');
            appendLineToTerminal('  clear     - clears the retrominal');
            terminalInput.focus(); // Focus the input field on load
        }

        // --- Mobile Navigation Logic ---
        function setupMobileNav() {
            const hamburgerIcon = document.getElementById('hamburger-icon');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileNavLinks = mobileMenu.querySelectorAll('a');

            if (hamburgerIcon && mobileMenu) {
                hamburgerIcon.addEventListener('click', () => {
                    mobileMenu.classList.toggle('active');
                });

                // Close menu when a link is clicked
                mobileNavLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.remove('active');
                    });
                });
            } else {
                console.error("Hamburger icon or mobile menu not found.");
            }
        }

        // --- Contact Form EmailJS Integration ---
        function initializeEmailJS() {
            // Initialize EmailJS with your public key
            // You'll need to replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
            emailjs.init('4y3mKrgbFUdiWISab'); // Replace with your EmailJS public key
        }

        function initializeContactForm() {
            const form = document.getElementById('contact-form');
            const submitBtn = document.getElementById('submit-btn');
            const btnText = document.querySelector('.btn-text');
            const btnLoading = document.querySelector('.btn-loading');
            const formMessages = document.getElementById('form-messages');
            const successMessage = document.getElementById('success-message');
            const errorMessage = document.getElementById('error-message');

            if (!form) {
                console.error('Contact form not found');
                return;
            }

            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
                btnText.style.display = 'none';
                btnLoading.style.display = 'inline';
                
                // Hide previous messages
                formMessages.style.display = 'none';
                successMessage.style.display = 'none';
                errorMessage.style.display = 'none';

                // Get form data
                const formData = {
                    from_name: document.getElementById('from_name').value,
                    from_email: document.getElementById('from_email').value,
                    message: document.getElementById('message').value,
                    to_email: 'narenvaithiyaa@gmail.com' // Your email
                };

                // Send email using EmailJS
                emailjs.send('service_wl2efpm', 'template_hhh3rhc', formData)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        showSuccessMessage();
                        form.reset(); // Clear the form
                    })
                    .catch(function(error) {
                        console.error('FAILED...', error);
                        showErrorMessage();
                    })
                    .finally(function() {
                        // Reset button state
                        submitBtn.classList.remove('loading');
                        submitBtn.disabled = false;
                        btnText.style.display = 'inline';
                        btnLoading.style.display = 'none';
                    });
            });

            function showSuccessMessage() {
                formMessages.style.display = 'block';
                successMessage.style.display = 'block';
                // Auto-hide after 5 seconds
                setTimeout(() => {
                    formMessages.style.display = 'none';
                }, 5000);
            }

            function showErrorMessage() {
                formMessages.style.display = 'block';
                errorMessage.style.display = 'block';
                // Auto-hide after 7 seconds
                setTimeout(() => {
                    formMessages.style.display = 'none';
                }, 7000);
            }
        }

        // --- Scrolling Text Effect Logic ---
        function initializeScrollingText() {
            const textItems = document.querySelectorAll('.text-item');
            let currentIndex = 0;
            
            if (textItems.length === 0) return; // Exit if no text items found
            
            function rotateText() {
                // Remove active class from current item and add exit animation
                textItems[currentIndex].classList.remove('active');
                textItems[currentIndex].classList.add('exit-up');
                
                // Move to next item (loop back to 0 if at end)
                currentIndex = (currentIndex + 1) % textItems.length;
                
                // After a brief delay, show the next item
                setTimeout(() => {
                    // Clean up all items first
                    textItems.forEach((item, index) => {
                        item.classList.remove('active', 'exit-up', 'enter-down');
                        if (index !== currentIndex) {
                            item.classList.add('enter-down');
                        }
                    });
                    
                    // Show the new active item
                    textItems[currentIndex].classList.add('active');
                }, 400); // Half of the transition duration
            }
            
            // Start the rotation after initial page load animations
            setTimeout(() => {
                setInterval(rotateText, 2000); // Change text every 2.5 seconds (slightly faster)
            }, 2000); // Wait 2 seconds before starting rotation
        }

        // Initial setup when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            console.log("DOMContentLoaded fired."); // Debugging log
            
            // Force scroll to top immediately when DOM is ready
            forceScrollToTop();
            
            terminalOutput = document.getElementById('fun-fact-terminal-output');
            terminalInput = document.getElementById('terminal-input');
            terminalEnterButton = document.getElementById('terminal-enter-button');

            console.log("Terminal elements:", { terminalOutput, terminalInput, terminalEnterButton }); // Debugging log

            // Event listener for Enter key in the input field
            if (terminalInput) { 
                terminalInput.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        handleCommand();
                    }
                });
            } else {
                console.error("Terminal input element not found, cannot attach event listener.");
            }

            // Event listener for the Enter button click
            if (terminalEnterButton) { 
                terminalEnterButton.addEventListener('click', handleCommand);
            } else {
                console.error("Terminal enter button element not found, cannot attach event listener.");
            }

            // Setup mobile navigation
            setupMobileNav();

            // Start the loading screen typing animation
            typeWriter();
        });

        // Additional enforcement when window is fully loaded (including images)
        window.addEventListener('load', () => {
            console.log("Window load event fired - ensuring scroll to top");
            forceScrollToTop();
            
            // Extra enforcement after a short delay
            setTimeout(() => {
                forceScrollToTop();
            }, 100);
        });

        // Handle page visibility changes (when user returns to tab)
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                // User returned to the tab, ensure we're at the top
                setTimeout(() => {
                    forceScrollToTop();
                }, 50);
            }
        });
