/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {

    Animations: require('animations'),
    BlendModes: require('renderer/BlendModes'),
    Cache: require('cache'),
    Cameras: {Scene2D: require('cameras/2d')},
    Core: require('core'),
    Class: require('utils/Class'),
    Data: require('data'),
    Display: {Masks: require('display/mask')},
    DOM: require('dom'),
    Events: require('events/EventEmitter'),
    Game: require('core/Game'),
    // GameObjects: require('gameobjects'),
    GameObjects: {
        Events: require('gameobjects/events'), // 添加所有gameobject中的events
        DisplayList: require('gameobjects/DisplayList'),
        GameObjectCreator: require('gameobjects/GameObjectCreator'),
        GameObjectFactory: require('gameobjects/GameObjectFactory'),
        UpdateList: require('gameobjects/UpdateList'),
        Components: require('gameobjects/components'),
        BuildGameObject: require('gameobjects/BuildGameObject'),
        BuildGameObjectAnimation: require('gameobjects/BuildGameObjectAnimation'),
        GameObject: require('gameobjects/GameObject'),
        Graphics: require('gameobjects/graphics/Graphics.js'),
        Image: require('gameobjects/image/Image'),
        Layer: require('gameobjects/layer/Layer'),
        Container: require('gameobjects/container/Container'), // 添加Container
        Group: require('gameobjects/group/Group'), // 添加Group
        Particles: require('gameobjects/particles'), // 添加粒子系统
        Sprite: require('gameobjects/sprite/Sprite'),
        Text: require('gameobjects/text/Text'),
        BitmapText: require('gameobjects/bitmaptext/static/BitmapText'), // 添加BitmapText
        DynamicBitmapText: require("gameobjects/bitmaptext/dynamic/DynamicBitmapText"), // 添加DynamicBitmapText
        Factories: {
            Graphics: require('gameobjects/graphics/GraphicsFactory'),
            Image: require('gameobjects/image/ImageFactory'),
            Layer: require('gameobjects/layer/LayerFactory'),
            Container: require('gameobjects/container/ContainerFactory'), // 添加Container
            Group: require('gameobjects/group/GroupFactory'), // 添加Group
            Particles: require('gameobjects/particles/ParticleManagerFactory'), // 添加粒子系统
            Sprite: require('gameobjects/sprite/SpriteFactory'),
            Text: require('gameobjects/text/TextFactory'),
            BitmapText: require('gameobjects/bitmaptext/static/BitmapTextFactory'), // 添加BitmapTextFactory
            DynamicBitmapText: require("gameobjects/bitmaptext/dynamic/DynamicBitmapTextFactory"), // 添加DynamicBitmapTextFactory
        },
        Creators: {
            Graphics: require('gameobjects/graphics/GraphicsCreator'),
            Image: require('gameobjects/image/ImageCreator'),
            Layer: require('gameobjects/layer/LayerCreator'),
            Container: require('gameobjects/container/ContainerCreator'), // 添加Container
            Group: require('gameobjects/group/GroupCreator'), // 添加Group
            Particles: require('gameobjects/particles/ParticleManagerCreator'), // 添加粒子系统
            Sprite: require('gameobjects/sprite/SpriteCreator'),
            Text: require('gameobjects/text/TextCreator'),
            BitmapText: require('gameobjects/bitmaptext/static/BitmapTextCreator'), // 添加BitmapTextCreator
            DynamicBitmapText: require("gameobjects/bitmaptext/dynamic/DynamicBitmapTextCreator"), // 添加DynamicBitmapTextCreator
        }
    },
    Geom: {
        // Circle: require('geom/circle'),
        // Ellipse: require('geom/ellipse'),
        // Intersects: require('geom/intersects'),
        Line: require('geom/line'),
        // Mesh: require('geom/mesh'),
        // Point: require('geom/point'),
        // Polygon: require('geom/polygon'),
        Rectangle: require('geom/rectangle'),
        Triangle: require('geom/triangle')

    },
    Input: require('input'),
    Loader: {
        Events: require("loader/events"), // 把所有的事件导入
        FileTypes: {
            AnimationJSONFile: require('loader/filetypes/AnimationJSONFile'),
            AtlasJSONFile: require('loader/filetypes/AtlasJSONFile'),
            AudioFile: require('loader/filetypes/AudioFile'),
            AudioSpriteFile: require('loader/filetypes/AudioSpriteFile'),
            HTML5AudioFile: require('loader/filetypes/HTML5AudioFile'),
            ImageFile: require('loader/filetypes/ImageFile'),
            JSONFile: require('loader/filetypes/JSONFile'),
            MultiAtlasFile: require('loader/filetypes/MultiAtlasFile'),
            PluginFile: require('loader/filetypes/PluginFile'),
            ScriptFile: require('loader/filetypes/ScriptFile'),
            SpriteSheetFile: require('loader/filetypes/SpriteSheetFile'),
            TextFile: require('loader/filetypes/TextFile'),
            XMLFile: require('loader/filetypes/XMLFile'),
            PackFile: require("loader/filetypes/PackFile"), // 添加load.pack
            BitmapFontFile: require('loader/filetypes/BitmapFontFile'), // 添加BitmapFont
        },
        File: require('loader/File'),
        FileTypesManager: require('loader/FileTypesManager'),
        GetURL: require('loader/GetURL'),
        LoaderPlugin: require('loader/LoaderPlugin'),
        MergeXHRSettings: require('loader/MergeXHRSettings'),
        MultiFile: require('loader/MultiFile'),
        XHRLoader: require('loader/XHRLoader'),
        XHRSettings: require('loader/XHRSettings')
    },
    Math: require('math'),
    // Math: {
    //     Between: require('math/Between'),
    //     DegToRad: require('math/DegToRad'),
    //     FloatBetween: require('math/FloatBetween'),
    //     RadToDeg: require('math/RadToDeg'),
    //     Vector2: require('math/Vector2'),
    //     RandomDataGenerator: require('math/random-data-generator/RandomDataGenerator'), // 添加随机数生成
    // },
    Plugins: require('plugins'),
    Renderer: require('renderer'),
    Scale: require('scale'),
    ScaleModes: require('renderer/ScaleModes'),
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    Structs: require('structs'),
    Textures: require('textures'),
    Time: require('time'),
    Tweens: require('tweens')
};

//   Merge in the consts//  Merge in the optional plugins and WebGL only features

if (typeof FEATURE_SOUND) {
    Phaser.Sound = require('sound');
}

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

/**
 * The root types namespace.
 *
 * @namespace Phaser.Types
 * @since 3.17.0
 */

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
