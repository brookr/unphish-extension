# Unphish Chrome Extension

## Why do we need this?

This project aims to reduce phishing, with community-specific configuration.

By offering a browser extension that validates official sites—and warns against reported bad sites—communities can help everyone STAY SAFU.

## What is it?

Unphish provides a visual alert on the screen, so community members know if a site is officially endorsed by a community or not.

There is often just a small handful of sites that are officially within the network of a community, so this extension will let you know when you are on one of them.

Anything else that looks like an official site, but is not on the communities list of approved domains, may well be a phishing attempt. As community members identify them, they can be flagged quickly so others can be warned.

Sites that are not known to be good or bad are silently ignored, so the user will see no endorsement or warning.

## How does it work?

Unphish should be configured, deployed, and shared out by whomever in the community maintains the list of official web addresses.

Steps:

1. Review the code to ensure it is accurate and safe, and something you want to endorse to your community.
1. Fork this repo into the community's source control org.
1. Modify the `urls-good.json` file with your official domains.
   - Include the "https://" for every URL.
   - Inlcude a comma after every entry, except the last.
   - Only use double-quotes around each entry (no single quotes).
1. Modify the `urls-bad.json` file with sites known to be phishing sites, scams, or in any way dangerous.
    - Follow the same guidance as above.
1. Publish your version of the extension to the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions).
1. Share the new extension with your community, and teach them how to install it, and what to look out for.

Optional additonal suggestions:

1. Replace the logos in the `/images` folder with your own logos, matching the pixel sizes indicated.
1. Customize the message in `on-danger.js` for your community, so folks know you are looking out for them.
1. Invite your community to report scams and phishing sites, by creating a PR against the `urls-bad.json` file. Verify proper JSON formatting before merging!
1. Don't accept any other PRs. Maintain the list in `urls-good.json` internally.
1. Better yet, host those files in a separate repo:
   - Edit the first 2 lines of `background.js` to point to your raw JSON for each list.
   - Now you don't have to re-publish your extension whenever you make an update!

## Contributing

Please create an issue to discuss any ideas you have, before creating a PR.

## Acknowledgements

Thanks to the following for inspiring this project and making it possible:

- @Punk6529 for building an amazing community, committed to decentralizaiton.
- Chrome extension docs, and sample code.
