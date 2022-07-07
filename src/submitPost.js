import Deso from 'deso-protocol';
const deso = new Deso();
const request = {
  "UpdaterPublicKeyBase58Check": "BC1YLhtFbZKvuXoPBgHzpn3n1LfgHBt2z1vFEZ4Haj6kkn4M4eAV8QA",
  "BodyObj": {
    "Body": "Checking out the developer hub",
    "VideoURLs": [],
    "ImageURLs": []
  }
};
const response = await deso.posts.submitPost(request);