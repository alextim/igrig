/**
 * https://simonhearne.com/2021/layout-shifts-webfonts/
 * https://meowni.ca/font-style-matcher/
 *
 * Microsoft
 * Segoe UI,SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif
 *
 * Medium
 * medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 *
 * Booking.com
 * BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif
 *
 * wordpress.com
 * -apple-system,BlinkMacSystemFont,"Segoe UI", Roboto,"Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif
 *
 * web.dev
 * Segoe UI,system-ui,-apple-system,sans-serif
 */
const webSafeFont = 'Segoe UI,system-ui,-apple-system,sans-serif';
const fonts = {
  // body: '"Open Sans", fallback-body-font, sans-serif',
  body: webSafeFont,
  heading: webSafeFont,
  // heading: 'Oswald, fallback-heading-font, sans-serif',
  logo: 'Oswald, fallback-heading-font, sans-serif',
  slogan: `Aclonica, ${webSafeFont}`,
  monospace: 'Menlo, monospace',
};

export default fonts;
