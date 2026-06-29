// Initialize Lucide Icons
lucide.createIcons();

/* MOBILE MENU */
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn) {
  menuBtn.onclick = () => {
    mobileMenu.style.right = '0';
  }
}

if (closeBtn) {
  closeBtn.onclick = () => {
    mobileMenu.style.right = '-100%';
  }
}

// Close mobile menu when clicking outside
if (mobileMenu) {
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target) && mobileMenu.style.right === '0px') {
      mobileMenu.style.right = '-100%';
    }
  });
}

/* PREMIUM MODAL */
function openModal() {
  const modal = document.getElementById('premiumModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Reinitialize icons in modal
    setTimeout(() => lucide.createIcons(), 100);
  }
}

function closeModal() {
  const modal = document.getElementById('premiumModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    if (mobileMenu) {
      mobileMenu.style.right = '-100%';
    }
  }
});

// Close modal when clicking outside
const modal = document.getElementById('premiumModal');
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

/* COMMENTS SYSTEM */
const commentForm = document.getElementById('commentForm');

if (commentForm) {
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('displayName').value.trim();
    const comment = document.getElementById('commentText').value.trim();

    // Validation
    if (!name || !comment) {
      alert('Please fill in both name and comment fields!');
      return;
    }

    const container = document.getElementById('commentsContainer');
    const div = document.createElement('div');

    div.className = 'glass rounded-2xl p-5';

    div.innerHTML = `
      <div class="flex justify-between items-center mb-3">
        <h4 class="font-bold text-white">${escapeHtml(name)}</h4>
        <button onclick="this.parentElement.parentElement.remove()" class="glass-btn px-3 py-1 rounded-xl text-sm">
          Delete
        </button>
      </div>

      <p class="text-white/60">${escapeHtml(comment)}</p>

      <div class="glass rounded-xl p-4 mt-4 ml-4">
        <h5 class="font-bold mb-2 text-white">Admin Reply</h5>
        <p class="text-white/50">Thank you for your feedback ❤️</p>
      </div>
    `;

    container.prepend(div);
    commentForm.reset();

    // Reinitialize icons
    lucide.createIcons();
  });
}

// Helper function to escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Reinitialize icons when page loads
window.addEventListener('load', () => {
  lucide.createIcons();
});
