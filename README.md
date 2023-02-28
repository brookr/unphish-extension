# Unphish 6529 Chrome Extention

## Why do we need this?

This project aims to reduce phishing, with community-specific configuration.

By offering a browser extension that validates known-good and warns against known-bad pages, communities can help everyone STAY SAFU.

## What is it?

Unphish provides a visual alert on the screen, so community members know if a site is officially endorsed by a community or not.

There's often just a few sites that are officially within the network of a community, so this extension will let you know when you are on one of them.

Anything else that looks like an official site, but is not on the short list, may well be a phishing attempt. As community members identify them, they can be flagged quickly so others can be warned.

Sites that are not known to be good or bad are silently ignored, so the user will see no endorsement or warning.

## How does it work?

Unphish should be configured, deployed, and shared out by whomever in the community maintains the list of official web addresses.

Steps:

1. Fork this repo to the community's source control org.
1. Modify the `sites-good.json` file with your official domains.
1. Modify the `sites-bad.json` file with sites known to be phishing sites, scams, or in any way dangerous.
1. Add your own logos to the `manifest.json` file.
1. Review the code to ensure it is accurate and safe.
1. Publish the code to the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions).
1. Share the new extension with your community, and teach them what to look out for.

## Contributing

Please create an issue to discuss any ideas you have, before creating a PR.

## Acknowledgements

Thanks to the following for making this possible.
