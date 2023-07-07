var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama",
      "name": "panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 1.7037538762127422,
          "pitch": 0.5302808473651233,
          "rotation": 1.5707963267948966,
          "target": "1-panorama2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama2",
      "name": "panorama2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.6274889319657033,
        "pitch": -0.14493764096143735,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 2.9632011348851357,
          "pitch": 0.20518250291285156,
          "rotation": 0,
          "target": "2-panorama3"
        },
        {
          "yaw": 0.3797121735349691,
          "pitch": 0.21816752116415472,
          "rotation": 5.497787143782138,
          "target": "0-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama3",
      "name": "panorama3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.009741799887542868,
        "pitch": 0.041953795567497565,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.186804282125145,
          "pitch": 0.2069537421934431,
          "rotation": 5.497787143782138,
          "target": "1-panorama2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4275430836890575,
          "pitch": 0.1195121550314564,
          "title": "Pot",
          "text": "Cook something for me :D<br>"
        }
      ]
    }
  ],
  "name": "Demo Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
