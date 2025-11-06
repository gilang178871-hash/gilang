# Gilang Ramadhan - Portfolio Website

A professional portfolio website built with HTML, CSS, and JavaScript, ready for deployment to Gamma.app or any static hosting service.

## 🎯 Overview

This website showcases Gilang Ramadhan's professional experience as Head of Marketing & Growth, featuring:
- Performance-driven marketing achievements
- Case studies and work experience
- Client partnerships and testimonials
- Contact form and resume download
- Animated metrics counters
- Fully responsive design

## 📁 File Structure

```
website/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── assets/             # (Create this folder for images/PDFs)
    ├── Gilang_Ramadhan_CV.pdf
    ├── og-image-1200x630.jpg
    └── [other assets]
```

## 🚀 Quick Start

1. **Open the website locally:**
   - Simply open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000` (then visit `http://localhost:8000`)

2. **For Gamma.app deployment:**
   - Upload `index.html`, `styles.css`, and `script.js` to Gamma
   - Copy each section's content from the HTML into Gamma's page builder
   - Upload assets (images, PDF) to Gamma's asset library
   - Link assets appropriately

## 📋 Required Assets

Before deploying, ensure you have these assets ready:

### Essential Files:
- [ ] **Professional headshot** (400×400px JPEG) - for hero section
- [ ] **CV/Resume PDF** (`Gilang_Ramadhan_CV.pdf`) - for download button
- [ ] **OG image** (1200×630px) - for social media sharing

### Optional Assets (for case studies):
- [ ] Growth charts/screenshots (PNG format, 1200×800px)
- [ ] Video thumbnails (1280×720px)
- [ ] Influencer highlight photos
- [ ] Client/partner logos (transparent PNG)
- [ ] Testimonial headshots (200×200px)

## 🎨 Customization

### Colors
The color scheme uses CSS variables defined in `styles.css`:
- Primary Navy: `#0B2340`
- Accent Teal: `#0FA3A3`
- Neutral Light: `#F7F8FA`
- Neutral Gray: `#6B7280`

To change colors, edit the `:root` variables in `styles.css`.

### Fonts
Currently using Google Fonts (Inter). To change:
1. Update the font link in `index.html`
2. Update `--font-family` in `styles.css`

## 📝 Content Updates

All content is in `index.html`. Key sections to customize:

1. **Hero Section** - Update headline, subheadline, and CTA text
2. **Metrics** - Update numbers in the metrics section
3. **Case Studies** - Modify the three case study entries
4. **Work Experience** - Update job titles, dates, and descriptions
5. **Contact Form** - Update form action URL (currently client-side only)

## 🔧 Features

### Animated Metrics
Metrics counters animate when scrolled into view. Configure target values in HTML using `data-target` attribute.

### Contact Form
The contact form includes:
- Client-side validation
- Form submission handling (currently shows success message)
- Analytics event tracking

**To enable actual form submission:**
1. Set up a backend endpoint (e.g., Netlify Forms, Formspree, or custom API)
2. Uncomment and update the fetch request in `script.js` (around line 116)

### Analytics
Google Analytics 4 tracking is prepared but commented out. To enable:

1. Get your GA4 Measurement ID
2. Uncomment the Google Analytics script in `index.html` (bottom of file)
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID

### SEO
- Meta tags are configured in the `<head>` section
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy

## 🌐 Deployment Options

### Option 1: Gamma.app
1. Create a new Gamma project
2. Copy section content from HTML into Gamma's page builder
3. Upload assets to Gamma's asset library
4. Publish

### Option 2: Static Hosting
- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Connect repository or deploy via CLI
- **GitHub Pages**: Push to repository and enable Pages
- **Cloudflare Pages**: Connect repository or upload files

### Option 3: Traditional Web Hosting
Upload all files via FTP/SFTP to your web server's public directory.

## 📱 Mobile Responsiveness

The site is fully responsive and tested for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔗 Important Links to Update

Before going live, update these in `index.html`:

1. **Social Media Links** (Footer section, around line 450)
   - Replace `#` with actual LinkedIn, Twitter, etc. URLs

2. **Calendly Link** (Contact section)
   - Replace `#` in "Schedule a call" button with your Calendly URL

3. **OG URL** (Meta tags, line 9)
   - Update with your actual website URL

4. **PDF Links**
   - Ensure `Gilang_Ramadhan_CV.pdf` exists in the same directory or update path

## 🐛 Troubleshooting

### Counters not animating?
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify `data-target` attributes are set correctly

### Form not submitting?
- Check browser console for JavaScript errors
- Ensure form validation passes
- Update the form endpoint URL in `script.js`

### Styling issues?
- Clear browser cache
- Verify `styles.css` is linked correctly
- Check for CSS conflicts if integrating with other frameworks

## 📞 Support

For questions or issues:
- Check the HTML comments for section-specific notes
- Review browser console for JavaScript errors
- Validate HTML/CSS using online validators

## 📄 License

This website template is created for Gilang Ramadhan's portfolio. Customize as needed for your use case.

---

**Last Updated:** January 2025
**Version:** 1.0
