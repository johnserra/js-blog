module.exports.SITE_CONFIG = {
	// Site info
	siteName: 'John Serra',
	siteTitle: `Hey, I'm John Serra`, // Site title.
	siteTitleShort: 'JS Blog', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: 'John Serra\'s Personal Blog', // Alternative site title for SEO.
	siteUrl: 'https://johnserra.com', // Domain of your website without pathPrefix.
	siteDescription: 'La Brutta Copia di John Serra.', // Website description used for RSS feeds/meta description tag.
	postsPerPage: 8,
	// Use for footer
	footerNav: [
		{ label: 'Sitemap', url: '/sitemap/sitemap-index.xml' },
		{ label: 'RSS', url: '/rss.xml' },
		{ label: 'Telegram', url: 'https://t.me/johnserra'},
		{ label: 'Twitter', url: 'https://twitter.com/JohnSerra' },
		{ label: 'LinkedIn', url: 'https://linkedin.com/in/johnserra' },
		{ label: 'GitHub', url: 'https://github.com/johnserra' },
	],
	social: {
		twitter: `JohnSerra`, // Creates meta tags for Twitter to look your tweet richer.
	},
	authorName: `@JohnSerra`, // Username to display in the author segment
	copyright:
		' | All Rights Reserved | All thoughts and opinions are solely mine.',
	// Use for manifest
	themeColor: '#0085c0', // Used for setting manifest and progress theme colors #1E293B.
	backgroundColor: '#FFF', // Used for setting manifest background color.
}
