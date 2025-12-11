/**
 * @module Editor Scripting
 * @version 5.17.0
 * For Snapchat Version: 13.70
*/
interface ComponentNameMap {
    "AnimationPlayer": Editor.Components.AnimationPlayer;
    "AudioComponent": Editor.Components.AudioComponent;
    "BaseMeshVisual": Editor.Components.BaseMeshVisual;
    "BodyComponent": Editor.Components.Physics.BodyComponent;
    "Camera": Editor.Components.Camera;
    "Canvas": Editor.Components.Canvas;
    "ClothVisual": Editor.Components.ClothVisual;
    "ColliderComponent": Editor.Components.Physics.ColliderComponent;
    "Component": Editor.Components.Component;
    "ConstraintComponent": Editor.Components.Physics.ConstraintComponent;
    "DeviceTracking": Editor.Components.DeviceTracking;
    "EyeColorVisual": Editor.Components.EyeColorVisual;
    "FaceInsetVisual": Editor.Components.FaceInsetVisual;
    "FaceMaskVisual": Editor.Components.FaceMaskVisual;
    "FaceStretchVisual": Editor.Components.FaceStretchVisual;
    "GaussianSplattingVisual": Editor.Components.GaussianSplattingVisual;
    "HairVisual": Editor.Components.HairVisual;
    "Head": Editor.Components.Head;
    "Image": Editor.Components.Image;
    "InteractionComponent": Editor.Components.InteractionComponent;
    "LightSource": Editor.Components.LightSource;
    "LiquifyVisual": Editor.Components.LiquifyVisual;
    "LocatedAtComponent": Editor.Components.LocatedAtComponent;
    "LookAtComponent": Editor.Components.LookAtComponent;
    "ManipulateComponent": Editor.Components.ManipulateComponent;
    "MarkerTrackingComponent": Editor.Components.MarkerTrackingComponent;
    "MaskingComponent": Editor.Components.MaskingComponent;
    "MaterialMeshVisual": Editor.Components.MaterialMeshVisual;
    "ObjectTracking": Editor.Components.ObjectTracking;
    "ObjectTracking3D": Editor.Components.ObjectTracking3D;
    "PinToMeshComponent": Editor.Components.PinToMeshComponent;
    "PostEffectVisual": Editor.Components.PostEffectVisual;
    "RectangleSetter": Editor.Components.RectangleSetter;
    "RenderLayerOwner": Editor.Components.RenderLayerOwner;
    "RenderMeshVisual": Editor.Components.RenderMeshVisual;
    "RetouchVisual": Editor.Components.RetouchVisual;
    "ScreenRegionComponent": Editor.Components.ScreenRegionComponent;
    "ScreenTransform": Editor.Components.ScreenTransform;
    "ScriptComponent": Editor.Components.ScriptComponent;
    "Skin": Editor.Components.Skin;
    "Text": Editor.Components.Text;
    "Text3D": Editor.Components.Text3D;
    "Visual": Editor.Components.Visual;
    "WorldComponent": Editor.Components.Physics.WorldComponent;
}

/**
* Remove the interval calls.
*/
declare function clearInterval(timeout: Timeout): void

/**
* Cancels the timeout.
*/
declare function clearTimeout(timeout: Timeout): void

declare function createFunctionObject(code: string, funcName: string): any

/**
* Repeatedly call `callback` every `delayMs` milliseconds.
*/
declare function setInterval(callback: () => void, delayMs: number): Timeout

/**
* Call `callback` after `delayMs` milliseconds.
*/
declare function setTimeout(callback: () => void, delayMs: number): Timeout

declare namespace global {
    /**
    * Provides access to the plugin's {@link SecureLocalStorage}.
    */
    let secureLocalStorage: SecureLocalStorage
    
}

declare class Base64 {
    
    /** @hidden */
    protected constructor()
    
    static decode(value: string): Uint8Array
    
    static encode(data: Uint8Array): string
    
    static encodeString(str: string): string
    
}

declare class BaseDescriptor extends IPluginDescriptor {
    
    /** @hidden */
    protected constructor()
    
    dependencies: Editor.InterfaceId[]
    
    description: string
    
    id: string
    
    interfaces: Editor.InterfaceId[]
    
    name: string
    
}

declare class console {
    
    /** @hidden */
    protected constructor()
    
    static debug(...data: any[]): void
    
    static error(...data: any[]): void
    
    static info(...data: any[]): void
    
    static log(...data: any[]): void
    
    static trace(...data: any[]): void
    
    static warn(...data: any[]): void
    
    static None: console.Category
    
    static User: console.Category
    
}

declare namespace console {
    class Category {
        
        /** @hidden */
        protected constructor()
        
    }

}

/**
* Namespace that provides access to the components of Lens Studio.

* @example
* ```js
* // Get the model component
* const model = this.pluginSystem.findInterface(Editor.Model.IModel);
* // Get the AssetManager in the current project (e.g. to import file).
* const assetManager = model.project.assetManager;
* ```
*/
declare class Editor {
    
    /** @hidden */
    protected constructor()
    
    static createAnimationClip(scene: Editor.Assets.Scene): Editor.AnimationClip
    
    /**
    * @beta
    */
    static isNull(object: any): boolean
    
}

declare namespace Editor {
    class Ai {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Ai {
        class Storage {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Alignment {
        /**
        * The options for horizontal alignment, for example when using {@link Editor.Components.BaseMeshVisual}
        */
        enum Horizontal {
            Left,
            Center,
            Right
        }
    
    }

}

declare namespace Editor {
    namespace Alignment {
        /**
        * The options for vertical alignment, for example when using {@link Editor.Components.BaseMeshVisual}
        */
        enum Vertical {
            Bottom,
            Center,
            Top
        }
    
    }

}

declare namespace Editor {
    class AnimationClip extends Editor.Model.EntityStructure {
        
        /** @hidden */
        protected constructor()
        
        animation: Editor.Assets.AnimationAsset
        
        begin: number
        
        blendMode: Editor.AnimationLayerBlendMode
        
        disabled: boolean
        
        end: number
        
        name: string
        
        playbackMode: Editor.PlaybackMode
        
        playbackSpeed: number
        
        reversed: boolean
        
        scaleMode: Editor.AnimationLayerScaleMode
        
        weight: number
        
        static getMeta(): Editor.Model.Meta
        
        static getTypeName(): string
        
    }

}

declare namespace Editor {
    enum AnimationLayerBlendMode {
        Default,
        Additive
    }

}

declare namespace Editor {
    enum AnimationLayerScaleMode {
        Multiply,
        Additive
    }

}

declare namespace Editor {
    class Assets {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Assets {
        class AnimationAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            duration: number
            
            /**
            * @readonly
            */
            fps: number
            
            /**
            * @readonly
            */
            frames: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The aliasing mode of {@link Editor.Assets.RenderTarget}.
        */
        enum AntialiasingMode {
            /**
            * Whether no aliasing should happen. 
            */
            Disabled,
            /**
            * Whether MSAA should be used.
            */
            MSAA,
            TAA
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        enum AntialiasingQuality {
            Low,
            Medium,
            High,
            Default,
            Ultra
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * An asset in Lens Studio.
        */
        class Asset extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            cacheFile: Editor.Path
            
            /**
            * @readonly
            */
            fileMeta: Editor.Model.AssetImportMetadata
            
            /**
            * The name of the asset.
            
            * @readonly
            */
            name: string
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class AudioTrackAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The blendmode of a {@link Editor.Assets.PassInfo}.
        */
        enum BlendMode {
            Disabled,
            Normal,
            Multiply,
            MultiplyLegacy,
            Add,
            AddLegacy,
            PremultipliedAlpha,
            Glass,
            ColoredGlass,
            AlphaTest,
            AlphaToCoverage,
            Screen,
            Min,
            Max,
            PremultipliedAlphaAuto,
            Custom,
            Darken,
            ColorBurn,
            Lighten,
            ColorDodge,
            Overlay,
            SoftLight,
            HardLight,
            VividLight,
            LinearLight,
            PinLight,
            HardMix,
            Diff,
            Exclusion,
            Subtract,
            Hue,
            Saturation,
            Color,
            Luminosity,
            Average,
            Negation,
            HardReflect,
            HardGlow,
            HardPhoenix,
            Realistic,
            Division,
            Bright,
            Forgray,
            NotBright,
            Intense
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class BodyTracking3DAsset extends Editor.Assets.Object3DAsset {
            
            /** @hidden */
            protected constructor()
            
            handTrackingEnabled: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * How a Render Target should be cleared every frame {@link Editor.Assets.RenderTarget}.
        */
        enum ClearColorOption {
            /**
            * The Render Target is not cleared at all.
            */
            None,
            /**
            * The last texture in the render pipeline will be used. 
            */
            BackgroundTexture,
            /**
            * The specified color will be used for every pixel at the beginning of the frame.
            */
            CustomColor,
            /**
            * The specified texture will replace the Render Target at the beginning of the frame. For example, the texture might be the {@link Editor.Assets.DeviceCameraTexture}.
            */
            CustomTexture,
            LegacyClearColorEnable
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        enum CullMode {
            /**
            * Cull the front face of a mesh.
            */
            Front,
            /**
            * Cull the back face of a mesh.
            */
            Back,
            /**
            * Cull both the fron and back face of a mesh.
            */
            FrontAndBack
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class CustomCodeNodeAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The depth buffer strategy of a {@link Editor.Assets.RenderTarget}.
        */
        enum DepthBufferStrategy {
            Auto,
            ForceOff,
            ForceOn
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * How a {@link Editor.Assets.PassInfo} should determine its depth compared to others.
        */
        enum DepthFunction {
            Never,
            Less,
            Equal,
            LessEqual,
            Greater,
            NotEqual,
            GreaterEqual,
            Always
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides the texture from the camera feed. Import with {@link Editor.Model.AssetManager#createNativeAsset}.
        */
        class DeviceCameraTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides a cropped region of the input texture, calculated based on face position. Import with {@link Editor.Model.AssetManager#createNativeAsset}.   Learn more in {@link LensScripting.FaceCropTextureProvider}
        
        */
        class FaceCropTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            faceCenterMouthWeight: number
            
            faceIndex: number
            
            inputTexture: Editor.Assets.Texture
            
            scale: vec2
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides a 3D mesh of the user's face. Import with {@link Editor.Model.AssetManager#createNativeAsset}.   Learn more in the Face Mesh guide.
        */
        class FaceMesh extends Editor.Assets.RenderMesh {
            
            /** @hidden */
            protected constructor()
            
            earGeometryEnabled: boolean
            
            expressionMultiplier: number
            
            externalMesh: Editor.Assets.FileMesh
            
            externalMeshMapUV: Editor.Assets.VertexAttribute
            
            externalScale: number
            
            eyeCornerGeometryEnabled: boolean
            
            eyeGeometryEnabled: boolean
            
            faceGeometryEnabled: boolean
            
            faceIndex: number
            
            mouthGeometryEnabled: boolean
            
            skullGeometryEnabled: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * An asset for 3D meshes.
        */
        class FileMesh extends Editor.Assets.RenderMesh {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * An asset for textures.
        */
        class FileTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            fileInfo: Editor.Assets.FileTextureInfo
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class FileTexture2DArray extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            fileInfo: Editor.Assets.FileTextureInfo3D
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class FileTexture3D extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            fileInfo: Editor.Assets.FileTextureInfo3D
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class FileTextureCubemap extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            fileInfo: Editor.Assets.FileTextureInfo3D
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class FileTextureInfo extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            height: number
            
            /**
            * @readonly
            */
            width: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class FileTextureInfo3D extends Editor.Assets.FileTextureInfo {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            depth: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * How a texture should be sampled. 
        */
        enum FilteringMode {
            Nearest,
            Bilinear,
            Trilinear
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Settings used with {@link Editor.Components.Text} and {@link Editor.Components.Text3D}.
        */
        class Font extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The same entity as in Lens Scripting.  @see {link Editor.Assets.PassInfo}. 
        */
        enum FrustumCullMode {
            Auto,
            Extend
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * An asset that contains Gaussian Splats and is used in conjunction with the GaussianSplattingVisual component. It is part of a system that renders Gaussian Splats.
        */
        class GaussianSplattingAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Flips X and Y axis of the asset.
            */
            flipXY: boolean
            
            pivot: vec3
            
            /**
            * Places pivot of the asset to the center of its bounding box.
            */
            recenter: boolean
            
            /**
            * Applies a scale multiplier to the asset's transform.
            */
            scale: number
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides data for {@link LensScripting.HairVisual}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        */
        class HairDataAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides data for {@link LensScripting.HandTracking3DAsset}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        */
        class HandTracking3DAsset extends Editor.Assets.Object3DAsset {
            
            /** @hidden */
            protected constructor()
            
            handType: Editor.Assets.HandTracking3DHandType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used with {Editor.Assets.HandTracking3DAsset}.
        */
        enum HandTracking3DHandType {
            Right,
            Left
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A {@link LensScripting.MarkerAsset} for use with {@link Editor.Components.MarkerTrackingComponent}
        
        * @example
        * ```js
        * // Create the asset
        * const imageMarker = assetManager.createNativeAsset('ImageMarker', 'Image Marker [EDIT_ME]', destination);
        
        * // Ask user for the file they want to use as image marker
        * import * as Ui from 'LensStudio:Ui';
        * const gui = pluginSystem.findInterface(Ui.IGui);
        * const filename = gui.dialogs.selectFileToOpen({ 'caption': 'Select image for the marker', 'filter': '*.png *.jpeg *.jpg' }, '')
        
        * // Import the image, and use it as the marker's texture
        * const importedTextureMeta = await assetManager.importExternalFileAsync(filename, destination, Editor.Model.ResultType.Auto);
        * imageMarker.texture = importedTextureMeta.primary;
        * ```
        */
        class ImageMarker extends Editor.Assets.MarkerAsset {
            
            /** @hidden */
            protected constructor()
            
            texture: Editor.Assets.FileTexture
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A script asset that is written in JavaScript. 
        
        * @example
        * #script-assetshttps://docs.snap.com/lens-studio/5.0.0/essential-skills/scripting/scripting-introduction
        */
        class JavaScriptAsset extends Editor.Assets.ScriptAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            scriptInputInfo: any
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class JsonAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class LicensedAudioTrack extends Editor.Assets.AudioTrackAsset {
            
            /** @hidden */
            protected constructor()
            
            artistName: string
            
            bundled: boolean
            
            /**
            * @readonly
            */
            runtimeSourceBeatsPath: Editor.Path
            
            /**
            * @readonly
            */
            runtimeSourceLyricsPath: Editor.Path
            
            /**
            * @readonly
            */
            runtimeSourcePath: Editor.Path
            
            trackId: string
            
            trackName: string
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class LocationAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            displayName: string
            
            locationId: string
            
            locationType: Editor.Assets.LocationType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides data for {@link LensScripting.LocationAsset}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        */
        class LocationMesh extends Editor.Assets.RenderMesh {
            
            /** @hidden */
            protected constructor()
            
            location: Editor.Assets.LocationAsset
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used with {Editor.Assets.Location}.
        */
        enum LocationType {
            Snap,
            Custom,
            World,
            Tile,
            RelativeTile,
            Proxy,
            NativeAR
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class MarkdownAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for Marker tracking. Learn more at {@link LensScripting.MarkerAsset}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        */
        class MarkerAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            height: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for visual objects rendering. Learn more at {@link LensScripting.Material}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        */
        class Material extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            addPass(pass: Editor.Assets.Pass): Editor.Assets.PassInfo
            
            passInfos: Editor.Assets.PassInfo[]
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for visual objects rendering. Learn more at {@link LensScripting.MLAsset}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        * @beta
        */
        class MLAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        enum MSAAStrategy {
            Default,
            OnlyWhenRequired
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class NativePackageDescriptor extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            attachments: Editor.Assets.Asset[]
            
            /**
            * @readonly
            */
            componentId: import('LensStudio:Uuid').Uuid
            
            description: string
            
            /**
            * @readonly
            */
            exportId: import('LensStudio:Uuid').Uuid
            
            icon: Editor.Icon
            
            /**
            * @readonly
            */
            packageName: string
            
            readMe: Editor.Assets.MarkdownAsset
            
            setupScript: Editor.Assets.SetupScript
            
            tags: string[]
            
            version: Editor.Assets.Version
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for visual objects rendering. Learn more at {@link LensScripting.Object3DAsset}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        */
        class Object3DAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Base class for entities which has object and component relationship such as {@link Editor.Assets.Scene} and {@link Editor.Assets.ObjectPrefab}.
        */
        class ObjectOwner extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Adds a scene object to the entity.
            */
            addSceneObject(parent: Editor.Model.SceneObject): Editor.Model.SceneObject
            
            /**
            * Creates a scene object to the entity.
            */
            createSceneObject(name: string): Editor.Model.SceneObject
            
            /**
            * Find components on the entity.
            */
            findComponents(entityType: string): Editor.Components.Component[]
            
            /**
            * Get the index of `object` within the list of all the root objects.
            */
            getRootObjectIndex(object: Editor.Model.SceneObject): number
            
            /**
            * Reparent the scene object to another scene object. You can use this to reparent objects to the root (i.e. pass in `null`).
            */
            reparentSceneObject(object: Editor.Model.SceneObject, newParent: Editor.Model.SceneObject, position?: number): void
            
            /**
            * A list of scene objects which is a direct child of this entity.
            
            * @readonly
            */
            rootSceneObjects: Editor.Model.SceneObject[]
            
            /**
            * A list of scene objects which is a child of this entity.
            
            * @readonly
            */
            sceneObjects: Editor.Model.SceneObject[]
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for visual objects rendering. Learn more at {@link LensScripting.ObjectPrefab}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        */
        class ObjectPrefab extends Editor.Assets.ObjectOwner {
            
            /** @hidden */
            protected constructor()
            
            lazyLoading: boolean
            
            /**
            * @readonly
            */
            prefabInstances: Editor.Model.SceneObject[]
            
            retainAssets: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for object tracking texture. Learn more at {@link LensScripting.ObjectTrackingTextureProvider}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        
        * @example
        * ```js
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * const destination new Editor.Path('');
        * const trackingType = Editor.Assets.ObjectTrackingTextureType.Nails;
        
        * const result = assetManager.createNativeAsset('ObjectTrackingTexture', 'Object Tracking Texture', destination);
        * result.trackingType = trackingType;
        * const objectTrackingTexParam = new Editor.Assets.TextureParameter(objectTrackingTexImage.id);
        * ```
        */
        class ObjectTrackingTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            trackingType: Editor.Assets.ObjectTrackingTextureType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used with {@link Editor.Assets.ObjectTrackingTexture}.
        */
        enum ObjectTrackingTextureType {
            Hand,
            Nails
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        enum PackagePolicy {
            CannotBeUnpacked,
            CanBeUnpacked,
            CannotBeUnpackedTransparent,
            CanBeUnpackedTransparent
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for visual objects rendering. Learn more at {@link LensScripting.Pass}. 
        
        * @example
        * ```js
        * // Get access to the project's assetManager
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * // Locate the shader pass we want to import
        * const resourceLoc = import.meta.resolve('Resources/myMesh.ss_graph');
        * const absGraphPath = new Editor.Path(resourceLoc);
        
        * // Import the shader pass
        * const meta = await assetManager.importExternalFileAsync(absolutePath, new Editor.Path(''), Editor.Model.ResultType.Packed);
        * // You can set meta.primary on a Material asset to use it.
        * ```
        */
        class Pass extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The {@link Editor.Assets.Pass} on a {@link Editor.Assets.Material}.
        
        * @example
        * ```js
        * // Import built in helpers
        * import * as Utils from 'LensStudio:Utils@1.0.js';
        
        * // In the plugin create function
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        * const destination = destination;
        
        * const material = const assetManager.createNativeAsset('Material', 'Material Name', destination);
        
        * const absGraphPath = new Editor.Path(params.graph_path);
        * const pass = await Utils.findOrCreateAsync(assetManager, absGraphPath, destination);
        * const passInfo = material.addPass(pass);
        * ```
        */
        class PassInfo extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            getPropertyNames(): string[]
            
            blendMode: Editor.Assets.BlendMode
            
            colorMask: vec4b
            
            cullMode: Editor.Assets.CullMode
            
            defines: string[]
            
            depthFunction: Editor.Assets.DepthFunction
            
            depthTest: boolean
            
            depthWrite: boolean
            
            frustumCulling: Editor.Assets.FrustumCullMode
            
            instanceCount: number
            
            polygonOffset: vec2
            
            twoSided: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class Physics {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        namespace Physics {
            class Filter extends Editor.Assets.Asset {
                
                /** @hidden */
                protected constructor()
                
                includeDynamic: boolean
                
                includeIntangible: boolean
                
                includeStatic: boolean
                
                onlyLayers: Editor.Model.LayerSet
                
                skipLayers: Editor.Model.LayerSet
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        namespace Physics {
            class LevelsetColliderAsset extends Editor.Assets.Asset {
                
                /** @hidden */
                protected constructor()
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        namespace Physics {
            class Matter extends Editor.Assets.Asset {
                
                /** @hidden */
                protected constructor()
                
                dynamicBounciness: number
                
                friction: number
                
                rollingFriction: number
                
                spinningFriction: number
                
                staticBounciness: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        namespace Physics {
            class WorldSettingsAsset extends Editor.Assets.Asset {
                
                /** @hidden */
                protected constructor()
                
                getLayersCollidable(layerNumberA: number, layerNumberB: number): boolean
                
                absoluteSpeedLimit: number
                
                defaultFilter: Editor.Assets.Physics.Filter
                
                defaultMatter: Editor.Assets.Physics.Matter
                
                gravity: vec3
                
                relativeSpeedLimit: number
                
                simulationRate: number
                
                slowDownStep: number
                
                slowDownTime: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * @beta
        */
        class RemoteMLAsset extends Editor.Assets.MLAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @beta
            */
            deviceDependentAssetId: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A mesh asset to be used with a {@link LensScripting.RenderMeshVisual}
        
        * @example
        * ```js
        * // Get access to the project's assetManager
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * // Locate the mesh we want to import
        * const resourceLoc = import.meta.resolve('Resources/myMesh.mesh');
        * const absGraphPath = new Editor.Path(resourceLoc);
        
        * // Import the mesh
        * const meta = await assetManager.importExternalFileAsync(absolutePath, new Editor.Path(''), Editor.Model.ResultType.Packed);
        * // You can set meta.primary on a Mesh Component to use it.
        * ```
        */
        class RenderMesh extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides the target for a camera to provide its output to. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        */
        class RenderTarget extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            antialiasingMode: Editor.Assets.AntialiasingMode
            
            clearColor: vec4
            
            clearColorOption: Editor.Assets.ClearColorOption
            
            depthBuffer: Editor.Assets.DepthBufferStrategy
            
            inputTexture: Editor.Assets.Texture
            
            msaaStrategy: Editor.Assets.MSAAStrategy
            
            resolution: Editor.Size
            
            useScreenResolution: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class Sampler {
            
            /** @hidden */
            protected constructor()
            
            filteringMode: Editor.Assets.FilteringMode
            
            mipmapsEnabled: boolean
            
            wrapModeU: Editor.Assets.WrapMode
            
            wrapModeV: Editor.Assets.WrapMode
            
            wrapModeW: Editor.Assets.WrapMode
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The entity which will be coverted into the Lens scene during project export. This scene will contan and own all objects and components in the Lens. This entity can be accessed via the current project’s `model.project.scene`.
        */
        class Scene extends Editor.Assets.ObjectOwner {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Instantiate a prefab as a child of `parent` under this entity.
            */
            instantiatePrefab(prefab: Editor.Assets.ObjectPrefab, parent: Editor.Model.SceneObject): Editor.Model.SceneObject
            
            captureTarget: Editor.Assets.RenderTarget
            
            /**
            * This list of layers that exists within this scene.
            
            * @readonly
            */
            layers: Editor.Model.Layers
            
            liveOverlayTarget: Editor.Assets.RenderTarget
            
            liveTarget: Editor.Assets.RenderTarget
            
            /**
            * The camera that renders `renderOutput`.
            
            * @readonly
            */
            mainCamera: Editor.Components.Camera
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Script Assets are text files that contain the code you write for your Lens. Scripts are written in Javascript or TypeScript. 
        
        * @example
        * ```js
        * ///@input string stringToPrint = "Print this on Tap"
        * //@input int testIntProperty = 7
        * //@input int[] testIntArray = {1, 2, 3}
        
        * scriptAsset.stringToPrint = "New String";
        * scriptAsset.testIntProperty = 9;
        * scriptAsset.testIntArray = [4,5,6];
        
        * // set icon 
        * const buffer = Editor.FileSystem.readTextAll(path to svg file)
        * const newIcon = Editor.Icon.setIconFromSVGData(buffer)
        * scriptAsset.icon = newIcon;
        * // getIcon
        * const icon = scriptAsset.icon
        
        * // set description 
        * scriptAsset.description = "helloWorld"
        * // get description 
        * const desc = scriptAsset.description 
        
        * // hide input 
        * scriptAsset.setScriptInputHidden("myInputName", true);
        
        * // unhide input 
        * scriptAsset.setScriptInputHidden("myInputName", true);
        
        * // check visibility of input 
        * scriptAsset.isScriptInputHidden("myInputName");
        * ```
        */
        class ScriptAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Returns true if the script inpput is hidden from the scene.
            */
            isScriptInputHidden(inputName: string): boolean
            
            /**
            * Used when you'd like to hide inputs from users in the scene. 
            */
            setScriptInputHidden(inputName: string, hidden: boolean): void
            
            attachments: Editor.Assets.Asset[]
            
            /**
            * Id associated with the script asset. 
            
            * @readonly
            */
            componentId: import('LensStudio:Uuid').Uuid
            
            /**
            * Description associated with the script asset 
            */
            description: string
            
            /**
            * Export id associated with the script asset. 
            
            * @readonly
            */
            exportId: import('LensStudio:Uuid').Uuid
            
            /**
            * Icon associated with the script asset. 
            */
            icon: Editor.Icon
            
            readMe: Editor.Assets.MarkdownAsset
            
            tags: string[]
            
            /**
            * Version associated with the script asset.
            */
            version: Editor.Assets.Version
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class ScriptInputInfo {
            
            /** @hidden */
            protected constructor()
            
            customTypePropertiesInfo: any
            
            defaultValue: string
            
            isCustomTypeInput: boolean
            
            type: string
            
            uiInfo: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for segmentation texture. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        * @example
        * ```js
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * const destination new Editor.Path('');
        * const segmentationType = Editor.Assets.SegmentationType.PortraitHair;
        
        * const result = assetManager.createNativeAsset('SegmentationTexture', 'Segmentation Texture', destination);
        * result.segmentationType = segmentationType;
        * ```
        */
        class SegmentationTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            feathering: number
            
            invertMask: boolean
            
            refineEdge: boolean
            
            segmentationType: Editor.Assets.SegmentationType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Built in segmentation textures to be used with {@link Editor.Assets.SegmentationTexture}.
        */
        enum SegmentationType {
            PortraitSegmentation,
            PortraitHair,
            PortraitSkin,
            PortraitShoulder,
            PortraitFace,
            PortraitHead,
            Sky,
            Body,
            UpperGarment,
            LowerGarment,
            FullGarment,
            Footwear
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class SetupScript {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            code: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that can be used with {@link LensScripting.MarkerTrackingComponent} Learn more at {@link LensScripting.SnapcodeMarkerProvider}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        */
        class SnapcodeMarker extends Editor.Assets.MarkerAsset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class SubgraphAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class SupabaseProject extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            projectId: string
            
            projectName: string
            
            projectUrl: string
            
            publicToken: string
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A 2D texture asset.
        
        * @example
        * ```js
        * // Get access to the project's assetManager
        * const model = this.pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * // Locate the shader pass we want to import
        * const resourceLoc = import.meta.resolve('Resources/image.jpeg');
        * const absGraphPath = new Editor.Path(resourceLoc);
        
        * // Import the shader pass
        * const meta = await assetManager.importExternalFileAsync(absolutePath, new Editor.Path(''), Editor.Model.ResultType.Packed);
        * // You can set meta.primary on a pass asset to use it.
        * ```
        */
        class Texture extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class TextureParameter {
            constructor(id: import('LensStudio:Uuid').Uuid)
            
            id: import('LensStudio:Uuid').Uuid
            
            sampler: Editor.Assets.Sampler
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class TypeScriptAsset extends Editor.Assets.ScriptAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            scriptInputInfo: any
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used to set the version of script assets.
        
        * @example
        * ```js
        * scriptAsset.version.major = 3;
        * scriptAsset.version.minor  = 2;
        * scriptAsset.version.patch = 1;
        * ```
        */
        class Version {
            /**
            * scriptAsset.version = new Editor.Assets.Version(1,2,3);
            */
            constructor(major: number, minor: number, patch: number)
            
            /**
            * Major version number.
            */
            major: number
            
            /**
            * Minor version number.
            */
            minor: number
            
            /**
            * Patch version number. 
            */
            patch: number
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used witih {@link Editor.Assets.FaceMesh}
        */
        enum VertexAttribute {
            Position,
            Normal,
            Tangent,
            Color,
            Texcoord0,
            Texcoord1,
            Texcoord2,
            Texcoord3,
            BoneData
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Options for what value is returned when a fetch falls outside the bounds of a texture.
        
        */
        enum WrapMode {
            /**
            * Texture coordinates will be clamped between 0 and 1.
            
            */
            ClampToEdge,
            /**
            * Between -1 and 1, the texture is mirrored across the 0 axis. The image is repeated outside of that range.
            
            */
            MirroredRepeat,
            /**
            * Wrap to the other side of the texture, effectively ignoring the integer part of the number to keep only the fractional part of the texture coordinate.
            
            */
            Repeat,
            /**
            * Outside the range of 0 to 1, texture coordinates return the value specified by the borderColor property.
            
            */
            ClampToBorderColor
        }
    
    }

}

declare namespace Editor {
    enum Axis {
        X,
        Y,
        Z
    }

}

declare namespace Editor {
    /**
    * @beta
    */
    class Buffer {
        /**
        * @beta
        */
        constructor(bytes: Uint8Array)
        
        /**
        * @beta
        */
        toBytes(): Uint8Array
        
        /**
        * @beta
        */
        toString(): string
        
    }

}

declare namespace Editor {
    class Components {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Components {
        class AnimationPlayer extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            animationClips: Editor.AnimationClip[]
            
            autoplay: boolean
            
            clipRangeType: Editor.Components.ClipRangeType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        class AudioComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            audioTrack: Editor.Assets.AudioTrackAsset
            
            curveType: Editor.Components.DistanceEffectCurveType
            
            enableAutoplayLoop: boolean
            
            enableDirectivityEffect: boolean
            
            enableDistanceEffect: boolean
            
            enableMixToSnap: boolean
            
            enablePositionEffect: boolean
            
            enableSpatialAudio: boolean
            
            maxDistance: number
            
            minDistance: number
            
            recordVolume: number
            
            volume: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link LensScripting.Text}.
        */
        class BackgroundSettings extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            cornerRadius: number
            
            enabled: boolean
            
            fill: Editor.Components.TextFill
            
            margins: Editor.Rect
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Head} to set position on the face.
        */
        class BarycentricVertex {
            constructor()
            
            indices: number[]
            
            weights: number[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.BaseMeshVisual}.
        */
        class BaseMeshVisual extends Editor.Components.Visual {
            
            /** @hidden */
            protected constructor()
            
            horizontalAlignment: Editor.Alignment.Horizontal
            
            meshShadowMode: Editor.Components.MeshShadowMode
            
            shadowColor: vec4
            
            shadowDensity: number
            
            stretchMode: Editor.Components.StretchMode
            
            verticalAlignment: Editor.Alignment.Vertical
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.Camera}.
        */
        class Camera extends Editor.Components.RenderLayerOwner {
            
            /** @hidden */
            protected constructor()
            
            aspect: number
            
            aspectPreset: Editor.Components.CameraAspectPreset
            
            cameraType: Editor.Components.CameraType
            
            clearColor: Editor.Components.CameraClearColor
            
            clearDepth: Editor.Components.CameraClearDepth
            
            depthMode: Editor.Components.CameraDepthBufferMode
            
            deviceProperty: Editor.Components.CameraDeviceProperty
            
            far: number
            
            fov: number
            
            inputTexture: Editor.Assets.Texture
            
            maskTexture: Editor.Assets.Texture
            
            mipmapLevel: number
            
            near: number
            
            oitLayers: Editor.Components.CameraOitLayers
            
            /**
            * @readonly
            */
            orthographicSize: vec2
            
            renderOrder: number
            
            renderTarget: Editor.Assets.RenderTarget
            
            size: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraAspectPreset {
            Specific,
            Custom
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        class CameraClearColor extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            color: vec4
            
            input: Editor.Assets.Texture
            
            mode: Editor.Components.CameraClearColor.Mode
            
            static staticMeta(): Editor.Model.Meta
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace CameraClearColor {
            /**
            * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
            */
            enum Mode {
                None,
                Background,
                Color,
                Texture
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        class CameraClearDepth extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            input: Editor.Assets.Texture
            
            mode: Editor.Components.CameraClearDepth.Mode
            
            value: number
            
            static staticMeta(): Editor.Model.Meta
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace CameraClearDepth {
            /**
            * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
            */
            enum Mode {
                None,
                Value,
                Texture
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraDepthBufferMode {
            Regular,
            Logarithmic
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraDeviceProperty {
            None,
            Aspect,
            Fov,
            All
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraOitLayers {
            NoOit,
            Layers4,
            Layers4Plus1,
            Layers8
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraType {
            Perspective,
            Orthographic
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link LensScripting.Canvas}.
        */
        class Canvas extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            pivot: vec2
            
            sortingType: Editor.Components.SortingType
            
            unitType: Editor.Components.UnitType
            
            worldSpaceRect: Editor.Rect
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        enum CapitalizationOverride {
            None,
            AllUpper,
            AllLower
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        enum ClipRangeType {
            Frames,
            Seconds
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.ClothVisual}.
        */
        class ClothVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            bendMode: Editor.Components.ClothVisual.BendMode
            
            bendStiffness: number
            
            colliders: Editor.Components.Physics.ColliderComponent[]
            
            collisionEnabled: boolean
            
            collisionFriction: number
            
            collisionOffset: number
            
            collisionStiffness: number
            
            debugModeEnabled: boolean
            
            frameRate: number
            
            friction: number
            
            gravity: vec3
            
            iterations: number
            
            mass: number
            
            maxAcceleration: number
            
            mesh: Editor.Assets.RenderMesh
            
            stretchStiffness: number
            
            updateNormalsEnabled: boolean
            
            vertexBindings: Editor.Components.ClothVisual.VertexBinding[]
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace ClothVisual {
            /**
            * The same entity as in Lens Scripting.  @see {@link Editor.Components.ClothVisual}.
            */
            enum BendMode {
                Isometric,
                Linear
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace ClothVisual {
            /**
            * The same entity as in Lens Scripting.  @see {@link Editor.Components.ClothVisual}.
            */
            class VertexBinding extends Editor.Model.Entity {
                
                /** @hidden */
                protected constructor()
                
                color: vec4
                
                colorMask: vec4b
                
                followObject: Editor.Model.SceneObject
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.ClothVisual}.
        */
        class Component extends Editor.Model.Prefabable {
            
            /** @hidden */
            protected constructor()
            
            enabled: boolean
            
            name: string
            
            /**
            * @readonly
            */
            sceneObject: Editor.Model.SceneObject
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.LightSource}.
        */
        enum DecayType {
            None,
            Linear,
            Quadratic
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.DeviceTracking}.
        */
        class DeviceTracking extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            deviceTrackingMode: Editor.Components.DeviceTrackingMode
            
            rotationOptions: Editor.Components.RotationOptions
            
            surfaceOptions: Editor.Components.SurfaceOptions
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.DeviceTracking}.
        */
        enum DeviceTrackingMode {
            Rotation,
            Surface,
            World
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        enum DistanceEffectCurveType {
            Linear,
            Inverse,
            Logarithm,
            InverseLogarithm
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text}.
        */
        class DropshadowSettings extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            enabled: boolean
            
            fill: Editor.Components.TextFill
            
            offset: vec2
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.LightSource}.
        */
        enum EnvmapFromCameraMode {
            Auto,
            Face,
            Surface
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text3D}.
        */
        enum ExtrudeDirection {
            Forwards,
            Backwards,
            Both
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.EyeColorVisual}.
        */
        class EyeColorVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            eyeToRender: Editor.Components.EyeToRender
            
            faceIndex: number
            
            rotationEnabled: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.EyeColorVisual}.
        */
        enum EyeToRender {
            Both,
            Left,
            Right
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.FaceInsetRegion}. Use with {@link Editor.Components.FaceInsetVisual}.
        */
        enum FaceInsetRegion {
            LeftEye,
            RightEye,
            Mouth,
            Nose,
            Face,
            Custom
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.FaceInsetVisual}.
        */
        class FaceInsetVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            faceIndex: number
            
            faceRegion: Editor.Components.FaceInsetRegion
            
            flipX: boolean
            
            flipY: boolean
            
            innerBorderRadius: number
            
            offset: vec2
            
            outerBorderRadius: number
            
            pivot: vec2
            
            sourceScale: vec2
            
            subDivisionCount: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.FaceMaskVisual}.
        */
        class FaceMaskVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            drawMouth: boolean
            
            enabledLipsFix: boolean
            
            enabledTeethFix: boolean
            
            faceIndex: number
            
            maskCoordinates: vec2[]
            
            maskOnMouthClosed: Editor.Assets.Texture
            
            originalFaceIndex: number
            
            teethFixAlpha: number
            
            textureCoordinates: vec2[]
            
            useOriginalTexCoords: boolean
            
            useTextureFacePosition: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.FaceStretchVisual}.
        */
        class FaceStretchVisual extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            addFeature(name: string): void
            
            clearFeatures(): void
            
            getFeatureNames(): string[]
            
            getFeaturePoints(name: string): Editor.Components.StretchPoint[]
            
            getFeatureWeight(name: string): number
            
            removeFeature(name: string): void
            
            setFeatureWeight(name: string, weight: number): void
            
            updateFeaturePoints(name: string, points: Editor.Components.StretchPoint[]): void
            
            faceIndex: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * A component used to render GaussianSplattingAsset.
        */
        class GaussianSplattingVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Specify which frame to display (for animated Gaussian Splattings `.gsaf`).
            */
            activeFrame: number
            
            /**
            * A GaussianSplattingAsset to render.
            */
            asset: Editor.Assets.GaussianSplattingAsset
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.HairVisual}.
        */
        class HairVisual extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            bendStiffness: number
            
            clumpDensity: number
            
            clumpRadius: number
            
            clumpTipScale: number
            
            collapseStiffness: number
            
            colliders: Editor.Components.Physics.ColliderComponent[]
            
            collisionEnabled: boolean
            
            collisionFriction: number
            
            collisionOffset: number
            
            collisionStiffness: number
            
            damp: number
            
            debugDrawLoadedStrands: boolean
            
            debugDrawSimulatedStrands: boolean
            
            debugModeEnabled: boolean
            
            density: number
            
            fallbackModeEnabled: boolean
            
            frameRate: number
            
            friction: number
            
            gravity: vec3
            
            hairData: Editor.Assets.HairDataAsset
            
            hairMaterial: Editor.Assets.Material
            
            hairResolution: number
            
            noise: number
            
            selfCollisionEnabled: boolean
            
            selfCollisionFriction: number
            
            selfCollisionOffset: number
            
            selfCollisionStiffness: number
            
            steppedCutEnabled: boolean
            
            stiffness: number
            
            strandCut: number
            
            strandNeighborCosThreshold: number
            
            strandNeighborLengthThreshold: number
            
            strandNeighborRadius: number
            
            strandTaper: number
            
            strandWidth: number
            
            stretchLimitEnabled: boolean
            
            stretchStiffness: number
            
            twistStiffness: number
            
            windEnabled: boolean
            
            windForce: vec3
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.Head}.
        */
        class Head extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            attachedBarycentricVertex: Editor.Components.BarycentricVertex
            
            attachmentPoint: Editor.Components.HeadAttachmentPointType
            
            faceIndex: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Head}.
        */
        enum HeadAttachmentPointType {
            HeadCenter,
            CandideCenter,
            TriangleBarycentric,
            LeftEyeballCenter,
            RightEyeballCenter,
            MouthCenter,
            Chin,
            Forehead,
            LeftForehead,
            RightForehead,
            LeftCheek,
            RightCheek
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text} and {@link Editor.Components.Text3D}.
        */
        enum HorizontalOverflow {
            Overflow,
            Truncate,
            TruncateFront,
            Wrap,
            Ellipsis,
            EllipsisFront,
            Shrink
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.Image}.
        */
        class Image extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            flipX: boolean
            
            flipY: boolean
            
            pivot: vec2
            
            rotationAngle: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.InteractionComponent}.
        */
        class InteractionComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            camera: Editor.Components.Camera
            
            depthFilter: boolean
            
            meshVisuals: Editor.Components.BaseMeshVisual[]
            
            minimumTouchSize: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.LightSource}.
        */
        class LightSource extends Editor.Components.RenderLayerOwner {
            
            /** @hidden */
            protected constructor()
            
            autoLightSourcePosition: boolean
            
            autoShadowFrustumSize: boolean
            
            autoShadowFrustumSizeExtend: number
            
            castsShadows: boolean
            
            color: vec4
            
            decayLimit: boolean
            
            decayRange: number
            
            decayType: Editor.Components.DecayType
            
            diffuseEnvmapTexture: Editor.Assets.Texture
            
            dynamicEnvInputTexture: Editor.Assets.Texture
            
            envmapExposure: number
            
            envmapFromCameraMode: Editor.Components.EnvmapFromCameraMode
            
            envmapRotation: number
            
            estimationSharpness: number
            
            innerConeAngle: number
            
            intensity: number
            
            lightType: Editor.Components.LightType
            
            outerConeAngle: number
            
            shadowBlurRadius: number
            
            shadowColor: vec4
            
            shadowDensity: number
            
            shadowFrustumFarClipPlane: number
            
            shadowFrustumNearClipPlane: number
            
            shadowFrustumSize: number
            
            shadowTextureSize: number
            
            specularEnvmapTexture: Editor.Assets.Texture
            
            useEnvmapFromCamera: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.LightSource}.
        */
        enum LightType {
            Point,
            Directional,
            Spot,
            Ambient,
            EnvMap,
            Estimation
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.LiquifyVisual}.
        */
        class LiquifyVisual extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            intensity: number
            
            radius: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.LocatedAtComponent}.
        */
        class LocatedAtComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            location: Editor.Assets.LocationAsset
            
            position: vec3
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.LookAtComponent}.
        */
        class LookAtComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            aimVectors: Editor.Components.LookAtComponent.AimVectors
            
            lookAtMode: Editor.Components.LookAtComponent.LookAtMode
            
            offsetRotation: quat
            
            target: Editor.Model.SceneObject
            
            worldUpVector: Editor.Components.LookAtComponent.WorldUpVector
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace LookAtComponent {
            /**
            * Settings used with {@link Editor.Components.LookAtComponent}.
            */
            enum AimVectors {
                XAimYUp,
                XAimZUp,
                YAimXUp,
                YAimZUp,
                ZAimXUp,
                ZAimYUp,
                XAimNegativeYUp,
                XAimNegativeZUp,
                YAimNegativeXUp,
                YAimNegativeZUp,
                ZAimNegativeXUp,
                ZAimNegativeYUp,
                NegativeXAimYUp,
                NegativeXAimZUp,
                NegativeYAimXUp,
                NegativeYAimZUp,
                NegativeZAimXUp,
                NegativeZAimYUp,
                NegativeXAimNegativeYUp,
                NegativeXAimNegativeZUp,
                NegativeYAimNegativeXUp,
                NegativeYAimNegativeZUp,
                NegativeZAimNegativeXUp,
                NegativeZAimNegativeYUp
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace LookAtComponent {
            /**
            * Settings used with {@link Editor.Components.LookAtComponent}.
            */
            enum LookAtMode {
                LookAtPoint,
                LookAtDirection
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace LookAtComponent {
            /**
            * Settings used with {@link Editor.Components.LookAtComponent}.
            */
            enum WorldUpVector {
                SceneX,
                SceneY,
                SceneZ,
                TargetX,
                TargetY,
                TargetZ,
                ObjectX,
                ObjectY,
                ObjectZ
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.ManipulateComponent}.
        */
        class ManipulateComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            drag: boolean
            
            maxDistance: number
            
            maxScale: number
            
            minDistance: number
            
            minScale: number
            
            rotate: boolean
            
            scale: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.MarkerTrackingComponent}.
        */
        class MarkerTrackingComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            marker: Editor.Assets.MarkerAsset
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        class MaskingComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            cornerRadius: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.MaterialMeshVisual}.
        */
        class MaterialMeshVisual extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            addMaterialAt(value: Editor.Assets.Material, pos?: number): void
            
            clearMaterials(): void
            
            getMaterialAt(pos: number): Editor.Assets.Material
            
            getMaterialsCount(): number
            
            indexOfMaterial(value: Editor.Assets.Material): number | undefined
            
            moveMaterial(origin: number, destination: number): void
            
            removeMaterialAt(pos: number): void
            
            setMaterialAt(pos: number, value: Editor.Assets.Material): void
            
            mainMaterial: Editor.Assets.Material
            
            materials: Editor.Assets.Material[]
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.BaseMeshVisual}.
        */
        enum MeshShadowMode {
            None,
            Caster,
            Receiver
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * @beta
        */
        class ObjectTracking extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @beta
            */
            trackingType: Editor.Components.ObjectTrackingType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.ObjectTracking3D}.
        */
        class ObjectTracking3D extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            matchingRootObject: Editor.Model.SceneObject
            
            objectIndex: number
            
            trackPosition: boolean
            
            trackingAsset: Editor.Assets.Object3DAsset
            
            trackingMode: Editor.Components.ObjectTracking3D.TrackingMode
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace ObjectTracking3D {
            enum TrackingMode {
                ProportionsAndPose,
                PoseOnly,
                Attachment
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.ObjectTracking}.
        */
        enum ObjectTrackingType {
            Cat,
            Dog,
            Pet,
            Hand,
            Nails,
            Shoulder,
            UpperBody,
            FullBody
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text}.
        */
        class OutlineSettings extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            enabled: boolean
            
            fill: Editor.Components.TextFill
            
            size: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        class Physics {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class BodyComponent extends Editor.Components.Physics.ColliderComponent {
                
                /** @hidden */
                protected constructor()
                
                angularDamping: number
                
                bodySetting: Editor.Components.Physics.BodySetting
                
                bodySettingValue: number
                
                damping: number
                
                dynamic: boolean
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            enum BodySetting {
                Mass,
                Density
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class Box extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                size: vec3
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class Capsule extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                axis: Editor.Axis
                
                length: number
                
                radius: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class ColliderComponent extends Editor.Components.Component {
                
                /** @hidden */
                protected constructor()
                
                debugDrawEnabled: boolean
                
                filter: Editor.Assets.Physics.Filter
                
                fitVisual: boolean
                
                forceCompound: boolean
                
                intangible: boolean
                
                matter: Editor.Assets.Physics.Matter
                
                overlapFilter: Editor.Assets.Physics.Filter
                
                rotateSmoothFactor: number
                
                shape: Editor.Components.Physics.Shape
                
                smooth: boolean
                
                translateSmoothFactor: number
                
                worldSettings: Editor.Assets.Physics.WorldSettingsAsset
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class Cone extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                axis: Editor.Axis
                
                length: number
                
                radius: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            enum Constraint {
                Fixed,
                Point,
                Hinge
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class ConstraintComponent extends Editor.Components.Component {
                
                /** @hidden */
                protected constructor()
                
                constraint: Editor.Components.Physics.Constraint
                
                debugDrawEnabled: boolean
                
                target: Editor.Components.Physics.ColliderComponent
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class Cylinder extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                axis: Editor.Axis
                
                length: number
                
                radius: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class LevelSet extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                asset: Editor.Assets.Physics.LevelsetColliderAsset
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class Mesh extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                convex: boolean
                
                mesh: Editor.Assets.RenderMesh
                
                skin: Editor.Components.Skin
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class Shape extends Editor.Model.EntityStructure {
                
                /** @hidden */
                protected constructor()
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class Sphere extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                radius: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            class WorldComponent extends Editor.Components.Component {
                
                /** @hidden */
                protected constructor()
                
                updateOrder: number
                
                worldSettings: Editor.Assets.Physics.WorldSettingsAsset
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace PinToMesh {
            enum Orientation {
                OnlyPosition,
                PositionAndDirection
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        class PinToMeshComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            offsetPosition: vec3
            
            offsetRotation: vec3
            
            orientation: Editor.Components.PinToMesh.Orientation
            
            pinUV: vec2
            
            target: Editor.Components.BaseMeshVisual
            
            useVertexNormal: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.PostEffectVisual}.
        */
        class PostEffectVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.RectangleSetter}.
        */
        class RectangleSetter extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            cropTexture: Editor.Assets.Texture
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The render layer which the component will be on. 
        */
        class RenderLayerOwner extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            renderLayer: Editor.Model.LayerSet
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.RenderMeshVisual}.
        */
        class RenderMeshVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            blendNormals: boolean
            
            blendShapesEnabled: boolean
            
            mesh: Editor.Assets.RenderMesh
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.RetouchVisual}.
        */
        class RetouchVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            eyeWhiteningIntensity: number
            
            faceIndex: number
            
            sharpenEyeIntensity: number
            
            softSkinIntensity: number
            
            teethWhiteningIntensity: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.DeviceTracking}.  @see {@link LensScripting.RotationOptions}.
        */
        class RotationOptions extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            invertRotation: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.ScreenRegionComponent}.
        */
        class ScreenRegionComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            region: Editor.Components.ScreenRegionType
            
            resizeWithKeyboard: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.ScreenRegionComponent}.
        */
        enum ScreenRegionType {
            FullFrame,
            Capture,
            Preview,
            SafeRender,
            RoundButton
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.ScreenTransform}.
        */
        class ScreenTransform extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            advanced: boolean
            
            anchor: Editor.Rect
            
            constraints: Editor.Components.ScreenTransformConstraints
            
            offset: Editor.Rect
            
            pivot: vec2
            
            transform: Editor.Transform
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.ScreenTransformConstraints}.
        */
        class ScreenTransformConstraints {
            constructor()
            
            fixedHeight: boolean
            
            fixedWidth: boolean
            
            pinToBottom: boolean
            
            pinToLeft: boolean
            
            pinToRight: boolean
            
            pinToTop: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.ScriptComponent}.
        
        * @example
        * ```js
        * const scriptComponent = sceneObject.addComponent('ScriptComponent')
        * scriptComponent.scriptAsset = scriptAsset
        * ```
        */
        class ScriptComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            inputNames: string[]
            
            /**
            * Script asset associated with the script component. 
            */
            scriptAsset: Editor.Assets.ScriptAsset
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        class Skin extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            skinBones: any
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.Canvas}.
        */
        enum SortingType {
            Hierarchy,
            Depth
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.BaseMeshVisual}.
        */
        enum StretchMode {
            Fill,
            Fit,
            Stretch,
            FitHeight,
            FitWidth,
            FillAndCut
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.FaceStretchVisual}.
        */
        class StretchPoint {
            constructor()
            
            delta: vec3
            
            index: number
            
            weight: number
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.DeviceTracking}.
        */
        class SurfaceOptions extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            enhanceWithNativeAR: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.Text}.
        */
        class Text extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            advancedLayout: Editor.Components.TextAdvancedLayout
            
            backgroundSettings: Editor.Components.BackgroundSettings
            
            capitalizationOverride: Editor.Components.CapitalizationOverride
            
            depthTest: boolean
            
            dropshadowSettings: Editor.Components.DropshadowSettings
            
            editable: boolean
            
            font: Editor.Assets.Font
            
            horizontalOverflow: Editor.Components.HorizontalOverflow
            
            italic: boolean
            
            letterSpacing: number
            
            lineSpacing: number
            
            outlineSettings: Editor.Components.OutlineSettings
            
            showEditingPreview: boolean
            
            size: number
            
            sizeToFit: boolean
            
            text: string
            
            textFill: Editor.Components.TextFill
            
            touchHandler: Editor.Components.InteractionComponent
            
            twoSided: boolean
            
            verticalOverflow: Editor.Components.VerticalOverflow
            
            weight: number
            
            worldSpaceRect: Editor.Rect
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.Text3D}.
        */
        class Text3D extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            advancedLayout: Editor.Components.TextAdvancedLayout
            
            capitalizationOverride: Editor.Components.CapitalizationOverride
            
            editable: boolean
            
            enableBatching: boolean
            
            extrudeDirection: Editor.Components.ExtrudeDirection
            
            extrusionDepth: number
            
            font: Editor.Assets.Font
            
            horizontalOverflow: Editor.Components.HorizontalOverflow
            
            italic: boolean
            
            letterSpacing: number
            
            lineSpacing: number
            
            showEditingPreview: boolean
            
            size: number
            
            sizeToFit: boolean
            
            text: string
            
            touchHandler: Editor.Components.InteractionComponent
            
            verticalOverflow: Editor.Components.VerticalOverflow
            
            weight: number
            
            worldSpaceRect: Editor.Rect
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        class TextAdvancedLayout extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            capitalizationOverride: Editor.Components.CapitalizationOverride
            
            extentsTarget: Editor.Components.ScreenTransform
            
            letterSpacing: number
            
            lineSpacing: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text}.  @see {@link LensScripting.Text}.
        */
        class TextFill extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            color: vec4
            
            mode: Editor.Components.TextFillMode
            
            texture: Editor.Assets.Texture
            
            textureStretch: Editor.Components.StretchMode
            
            tileCount: number
            
            tileZone: Editor.Components.TextFillTileZone
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text}.  @see {@link LensScripting.Text}.
        */
        enum TextFillMode {
            Solid,
            Texture
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        enum TextFillTileZone {
            Rect,
            Extents,
            Character,
            Screen
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Canvas}.  @see {@link LensScripting.Canvas}.
        */
        enum UnitType {
            World,
            Pixels,
            Points
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text}.  @see {@link LensScripting.Text}.
        */
        enum VerticalOverflow {
            Overflow,
            Truncate,
            Shrink
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.Visual}.
        */
        class Visual extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            renderOrder: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    class Compression {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Compression {
        class GZip {
            
            /** @hidden */
            protected constructor()
            
            static pack(srcFile: Editor.Path, destFile: Editor.Path): void
            
            /**
            * @beta
            */
            static unpack(srcFile: Editor.Path, dstFile: Editor.Path): void
            
        }
    
    }

}

declare namespace Editor {
    namespace Compression {
        /**
        * Module to zip and unzip files. 
        */
        class Zip {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Pack files into a zip. 
            */
            static pack(src: Editor.Path, destFile: Editor.Path): void
            
            /**
            * Unpack the zip file.
            
            * @beta
            */
            static unpack(src: Editor.Path, destDir: Editor.Path): void
            
        }
    
    }

}

declare namespace Editor {
    /**
    * An action in a {@link Editor.IContextActionRegistry}.
    */
    class ContextAction {
        constructor()
        
        /**
        * Callback for when the action is executed.
        */
        apply: () => void
        
        /**
        * Caption for the action.
        */
        caption: string
        
        /**
        * Description for the action.
        */
        description: string
        
        /**
        * Section for the action to be in. 
        */
        group: string[]
        
        /**
        * Identifier for the caption. 
        */
        id: string
        
    }

}

declare namespace Editor {
    class Dock {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Dock {
        /**
        * Manages the states of Lens Studio panels.
        
        * @example
        * ```js
        * import CoreService from 'LensStudio:CoreService';
        * import * as serialization from 'LensStudio:Serialization';
        
        * export class DockManager extends CoreService {
        *     static descriptor() {
        *         return {
        *             id: 'Snap.Test.DockManager',
        *             name: 'DockManager',
        *             description: 'DockManager',
        *             interfaces: CoreService.descriptor().interfaces,
        *             dependencies: [Editor.Dock.IDockManager]
        *         };
        *     }
        
        *     constructor(pluginSystem) {
        *         super(pluginSystem);
        *         this.guards = [];
        *     }
        
        *     start() {
        *         const layoutStr = 'dock:\n' +
        * d: false\n' +
        *             '  main:\n' +
        *             '    items:\n' +
        *             '      - items:\n';
        
        *         // Simply test that reader and writer can be created and used without throwing
        *         let reader = serialization.Yaml.createReader(layoutStr);
        *         const writer = serialization.Yaml.createWriter();
        
        *         const dockManager = this.pluginSystem.findInterface(Editor.Dock.IDockManager);
        *         dockManager.write(writer);
        *         const writtenContent = writer.getString();
        *         reader = serialization.Yaml.createReader(writtenContent);
        *     }
        
        *     stop() {
        *     }
        * }
        * ```
        */
        class IDockManager extends Editor.IPluginComponent {
            
            /** @hidden */
            protected constructor()
            
            activate(panel: IPanelPlugin): void
            
            add(panel: IPanelPlugin): void
            
            highlight(panel: IPanelPlugin): void
            
            /**
            * Reads the current state of the DockManager.
            
            * @beta
            */
            read(reader: import('LensStudio:Serialization').IReader): void
            
            remove(panel: IPanelPlugin): void
            
            /**
            * Writes to the Dock Manager.
            
            * @beta
            */
            write(writer: import('LensStudio:Serialization').IWriter): void
            
            /**
            * @readonly
            */
            panels: IPanelPlugin[]
            
            static interfaceId: Editor.InterfaceId
            
        }
    
    }

}

declare namespace Editor {
    /**
    * Component that allows you to check whether Lens Studio is authorized, as well as get authorization. Requires `snap_auth_token` in the `module.json` of your plugin.
    */
    class IAuthorization extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Initiate the authorization flow.
        */
        authorize(): void
        
        /**
        * @readonly
        */
        idToken: string
        
        /**
        * Current authorization state.
        
        * @readonly
        */
        isAuthorized: boolean
        
        /**
        * Signal that responds to changes in authorization state.
        
        * @readonly
        */
        onAuthorizationChange: signal1<boolean, void>
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    /**
    * An icon to be used in the Editor UI.
    
    * @beta
    
    * @example
    * ```js
    * const pathToIconFromPlugin = import.meta.resolve('icon.svg');
    * Editor.Icon.fromFile(pathToIconFromPlugin);
    * ```
    */
    class Icon {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Creates an icon from an SVG file.
        
        * @beta
        */
        static fromFile(absoluteFilePath: Editor.Path): Editor.Icon
        
        /**
        * Creates an icon from a buffer containing SVG data.
        
        * @beta
        */
        static fromSvgData(buffer: string): Editor.Icon
        
    }

}

declare namespace Editor {
    class IContext extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    /**
    * A registry of {@link Editor.ContextAction} which will be shown in a contextual menu (i.e. right click).
    
    * @example
    * ```js
    * import { CoreService } from 'LensStudio:CoreService';
    
    * export class ContextActionRegistry extends CoreService {
    *     static descriptor() {
    *         return {
    *             id: 'com.example.contextActionRegistry',
    *             name: 'ContextActionRegistry',
    *             description: 'ContextActionRegistry',
    *             interfaces: CoreService.descriptor().interfaces,
    *             dependencies: [Editor.IContextActionRegistry]
    *         };
    *     }
    
    *     constructor(pluginSystem) {
    *         super(pluginSystem);
    *         this.guards = [];
    *     }
    
    *     start() {
    *         const contextActionRegistry = this.pluginSystem.findInterface(Editor.IContextActionRegistry);
    *         this.guards.push(contextActionRegistry.registerAction((context) => {
    *             const action = new Editor.ContextAction();
    *             action.id = 'Test Action Id';
    *             action.caption = 'Test Action Caption';
    *             action.description = 'Test Action Description';
    *             action.group = ['Test Group'];
    *             action.apply = () => {
    *             };
    *             return action;
    *         }));
    *     }
    
    *     stop() {
    *         this.guards = [];
    *     }
    * }
    * ```
    */
    class IContextActionRegistry extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Adds the `action` to the registry.
        */
        registerAction(action: (arg1: Editor.IContext) => Editor): Editor.IGuard
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    /**
    * Popup window that allows the user to choose specific objects in the Scene hierarchy, or assets in the Asset Browser.
    
    * @example
    * ```js 
    * // Get access to the project's model component 
    * const model = this.pluginSystem.findInterface(Editor.IModel); 
    * const project = model.project;  
    
    * // Get access to the picker component 
    * const refPicker = this.pluginSystem.findInterface(Editor.IEntityPicker);  
    
    * // Open a picker  
    * const type = "SceneObject" 
    
    * // or Asset, etc. 
    * refPicker.requestPicker(type, (pickedReplacementUid) => {
    *     console.log(pickedReplacementUid);
    * })  
    
    * // List assets in project 
    * const assetManager = project.assetManager; 
    * assetManager.assets.forEach( asset => {
    *     console.log(asset.id);
    * })  
    
    * // List objects in project's scene 
    * const scene = project.scene; 
    * scene.sceneObjects.forEach( obj => {
    *     console.log(obj.id);
    * })
    * ```
    */
    class IEntityPicker extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @beta
        */
        requestPicker(entityType: string, callback: (arg1: Editor.Model.Entity) => void): void
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    /**
    * Represents ownership of a resource. 
    * If this object is garbage collected, or `dispose()` method is called – the associated resource is freed.
    
    
    * @beta
    */
    class IGuard extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @beta
        */
        dispose(): void
        
    }

}

declare namespace Editor {
    class IInterface extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    class InterfaceId {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    class IOverlayManager extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @beta
        */
        requestShow(overlayID: string): void
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    class IPackageActions extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        exportPackage(nativePackageDescriptor: Editor.Assets.NativePackageDescriptor, path: Editor.Path, exportOptions: Editor.Model.ExportOptions): void
        
        exportScript(scriptAsset: Editor.Assets.ScriptAsset, path: Editor.Path, exportOptions: Editor.Model.ExportOptions): void
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    class IPackageRegistry extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        canPullUpdate(asset: Editor.Assets.Asset): boolean
        
        canPushUpdate(asset: Editor.Assets.Asset): boolean
        
        canRegisterToLibrary(asset: Editor.Assets.Asset): boolean
        
        getLibraryPaths(): Editor.Path[]
        
        getTypeById(uid: import('LensStudio:Uuid').Uuid, entityBaseType: Editor.Model.EntityBaseType): string
        
        getTypeByName(name: string, entityBaseType: Editor.Model.EntityBaseType): string
        
        getTypeByVersion(uid: import('LensStudio:Uuid').Uuid, version: Editor.Assets.Version, entityBaseType: Editor.Model.EntityBaseType): string
        
        isInLibrary(componentId: import('LensStudio:Uuid').Uuid): boolean
        
        isInProject(componentId: import('LensStudio:Uuid').Uuid): boolean
        
        packageMetadata(sourcePath: Editor.Path): Editor.PackageMetadata
        
        pullUpdate(asset: Editor.Assets.Asset): void
        
        pushUpdate(asset: Editor.Assets.Asset, locked: boolean): void
        
        registerToLibrary(asset: Editor.Assets.Asset): void
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    class IPlugin extends Editor.IInterface {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        id: string
        
    }

}

declare namespace Editor {
    class IPluginComponent extends Editor.IInterface {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    /**
    * The model object is a core concept in the plugin development environment. It serves as a central point for accessing key elements such as the scene, project, and {@link Editor.Model.AssetManager}.  The model object encapsulates the data model representing a Lens Studio project. It brings together environment entities and functionalities that are essential for developing plugins. It plays a role analogous to the "Model" component found in Model-View-Controller architectural patterns, containing both data and business logic.  In order to get the model object, which many key objects are stored within, you need the pluginSystem object which is being passed into the constructor of the plugin class, along with the ID of the model component (which can be accessed through the `Editor` namespace) 
    
    * @example
    * ```js
    * const model = pluginSystem.findInterface(Editor.Model.IModel)
    * const assetManager = model.project.assetManager
    * const scene = model.project.scene
    * ```
    */
    class Model {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Model {
        class AssetContext extends Editor.IContext {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            selection: Editor.Model.AssetContext.Item[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        namespace AssetContext {
            class Item {
                
                /** @hidden */
                protected constructor()
                
                /**
                * @readonly
                */
                asset: Editor.Assets.Asset
                
                /**
                * @readonly
                */
                path: Editor.Path
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * A handle for the metadata of an asset. 
        
        * @example
        * ```js
        * // Get an asset by either finding an already imported one, or importing it.
        * export function findOrCreate(assetManager, absolutePath) {
        *     let meta = assetManager.findImportedCopy(absolutePath);
        *     if (meta) {
        *         return meta.primaryAsset;
        *     }
        
        *     meta = assetManager.importExternalFile(absolutePath);
        *     return meta.primaryAsset;
        * }
        * ```
        
        */
        class AssetImportMetadata extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            getExtraDataItem(key: string): string
            
            getNativePackageItems(iterateOption: Editor.Model.AssetImportMetadata.PackageIterate): Editor.Model.AssetImportMetadata[]
            
            setExtraDataItem(key: string, value: string): void
            
            /**
            * @readonly
            */
            assetTreePath: Editor.Model.SourcePath
            
            /**
            * A list of all the available assets this handle contains.
            
            * @readonly
            */
            assets: Editor.Assets.Asset[]
            
            /**
            * @readonly
            */
            isPackedPackageItem: boolean
            
            /**
            * @readonly
            */
            nativePackageDescriptor: Editor.Assets.NativePackageDescriptor
            
            /**
            * @readonly
            */
            nativePackageRoot: Editor.Model.AssetImportMetadata
            
            /**
            * The primary asset of this handle. Usually, this is the asset you will assign after accessing an asset.
            
            * @readonly
            */
            primaryAsset: Editor.Assets.Asset
            
            /**
            * The source file where the asset was imported from.
            
            * @readonly
            */
            sourcePath: Editor.Path
            
            /**
            * @readonly
            */
            topmostNativePackageRoot: Editor.Model.AssetImportMetadata
            
            static staticMeta(): Editor.Model.Meta
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        namespace AssetImportMetadata {
            enum PackageIterate {
                Shallow,
                Deep
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class AssetManager extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            createNativeAsset(assetType: string, baseName: string, relativeDestinationDir: Editor.Model.SourcePath): Editor.Assets.Asset
            
            createPackage(requestedAssets: Editor.Model.AssetImportMetadata[], relativeDestinationDir: Editor.Model.SourcePath, packageName: string, packageOption: Editor.Model.PackageOption): Editor.Model.AssetImportMetadata
            
            exportAssets(requestedAssets: Editor.Model.AssetImportMetadata[], absoluteDestination: Editor.Path): Editor.Model.AssetImportMetadata[]
            
            exportSceneObjects(topLevelSceneObjects: Editor.Model.SceneObject[], absoluteDestination: Editor.Path): Editor.Model.AssetImportMetadata[]
            
            /**
            * Find a copy, if it exists, of a file. 
            */
            findImportedCopy(absoluteSourcePath: Editor.Path): Editor.Model.AssetImportMetadata
            
            getFileMeta(relativeFilePath: Editor.Model.SourcePath): Editor.Model.AssetImportMetadata
            
            importExternalFile(absoluteSourcePath: Editor.Path, relativeDestinationDir: Editor.Model.SourcePath, resultType: Editor.Model.ResultType, importSettings?: Editor.Model.ImportSettings): Editor.Model.ImportResult
            
            importExternalFileAsync(absoluteSourcePath: Editor.Path, relativeDestinationDir: Editor.Model.SourcePath, resultType: Editor.Model.ResultType, importSettings?: Editor.Model.ImportSettings): Promise<Editor.Model.ImportResult>
            
            instantiate(assets: Editor.Assets.Asset[], params?: Editor.Model.InstantiationParams): Promise<Editor.Model.Prefabable[]>
            
            move(fileMeta: Editor.Model.AssetImportMetadata, relativeDestinationDir: Editor.Model.SourcePath): void
            
            remove(relativeFilePath: Editor.Model.SourcePath): void
            
            rename(fileMeta: Editor.Model.AssetImportMetadata, newName: string): void
            
            saveAsPrefab(sceneObject: Editor.Model.SceneObject, relativeDestinationDir: Editor.Model.SourcePath): Editor.Assets.ObjectPrefab
            
            unpack(nativePackageRoot: Editor.Model.AssetImportMetadata): Promise<Editor.Model.ImportResult>
            
            /**
            * @readonly
            */
            assets: Editor.Assets.Asset[]
            
            /**
            * @readonly
            */
            assetsDirectory: Editor.Path
            
            /**
            * @readonly
            */
            cacheDirectory: Editor.Path
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class AssetMeta extends Editor.Model.InspectableMeta {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            isNative: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class BaseChangesStream extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            executeAsGroup(name: string, change: () => void): void
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        enum DeviceType {
            Unknown,
            Mobile,
            Spectacles,
            Desktop
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * An object in the scene, or asset in the {@link Editor.Model.AssetManager}
        */
        class Entity extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * A list of entities which this entity has a reference to.
            */
            getDirectlyReferencedEntities(): Editor.Model.Entity[]
            
            /**
            * A list of entities which has a reference to this entity.
            */
            getOwnedEntities(): Editor.Model.Entity[]
            
            /**
            * The unique id of the entity.
            
            * @readonly
            */
            id: import('LensStudio:Uuid').Uuid
            
            /**
            * @readonly
            */
            meta: Editor.Model.Meta
            
            /**
            * The entity's type. 
            
            * @readonly
            */
            type: string
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * @beta
        */
        enum EntityBaseType {
            /**
            * @beta
            */
            Component,
            /**
            * @beta
            */
            Asset
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class EntityPrototypeData {
            constructor()
            
            baseEntityType: string
            
            caption: string
            
            creator: (any|any)
            
            entityType: string
            
            icon: Editor.Icon
            
            section: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class EntityStructure extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class ExportOptions {
            constructor()
            
            dependenciesToInclude: Editor.Model.AssetImportMetadata[]
            
            packagePolicy: Editor.Assets.PackagePolicy
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class IEntityPrototypeRegistry extends Editor.IPluginComponent {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @beta
            */
            createEntity(entityType: string, context: (Editor.Path|Editor.Model.Entity), callback: (arg1: Editor.Model.Entity) => void): void
            
            /**
            * @beta
            */
            getCaptionForType(type: string): string
            
            getEntityTypes(baseType: string, acceptsType: (arg1: string) => any): string[]
            
            /**
            * @beta
            */
            getIconForType(type: string): Editor.Icon
            
            registerEntityPrototype(prototypeData: Editor.Model.EntityPrototypeData): Editor.IGuard
            
            static interfaceId: Editor.InterfaceId
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * A registry of various entities. 
        
        * @example
        * ```js
        * // Get a list of abstract entities
        * const entityRegistry = pluginSystem.findInterface(Editor.Model.IEntityRegistry);
        * const abstractFilter = (entityType) => {
        *     return entityRegistry.getMeta(entityType).isAbstract;
        * };
        * ```
        */
        class IEntityRegistry extends Editor.IPluginComponent {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Get the metadata of an entity.
            */
            getMeta(entityType: string): Editor.Model.Meta
            
            static interfaceId: Editor.InterfaceId
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class IModel extends Editor.IPluginComponent {
            
            /** @hidden */
            protected constructor()
            
            openProject(path: Editor.Path): void
            
            setDefaultProject(): void
            
            setEmptyProject(): void
            
            /**
            * @readonly
            */
            onMetaInfoChanged: signal0<void>
            
            /**
            * @readonly
            */
            onProjectAboutToBeChanged: signal0<void>
            
            /**
            * @readonly
            */
            onProjectChanged: signal0<void>
            
            /**
            * @readonly
            */
            onProjectSaving: signal2<Editor.Model.ProjectSaveMode, Editor.Path, void>
            
            /**
            * @readonly
            */
            project: Editor.Model.Project
            
            static interfaceId: Editor.InterfaceId
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The result of {@link Editor.Model.AssetManager.importExternalFile} and {@link Editor.Model.AssetManager.importExternalFileAsync}.
        */
        class ImportResult {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The metadata of the files imported.
            
            * @readonly
            */
            files: Editor.Model.AssetImportMetadata[]
            
            /**
            * A path to the imported file.
            
            * @readonly
            */
            path: Editor.Path
            
            /**
            * The asset which is usually referenced after the asset has been imported.
            
            * @readonly
            */
            primary: Editor.Assets.Asset
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * @beta
        */
        class ImportSettings {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            
            * @beta
            */
            aborted: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class InspectableMeta extends Editor.Model.Meta {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            caption: string
            
            /**
            * @readonly
            */
            icon: Editor.Icon
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class InstantiationParams {
            
            /** @hidden */
            protected constructor()
            
            parents: Editor.Model.SceneObject[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The layers within a {@link Editor.Model.LayerSet}.
        */
        class Layer {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The id of this layer.
            */
            id: Editor.Model.LayerId
            
            /**
            * The name of the layer.
            */
            name: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The id of a {@link Editor.Model.Layer}.
        */
        class LayerId {
            constructor(value: number)
            
            static forEach(predicate: (arg1: Editor.Model.LayerId) => void): void
            
            static forEachUser(predicate: (arg1: Editor.Model.LayerId) => void): void
            
            /**
            * The default layer in a Lens.
            */
            static Default: Editor.Model.LayerId
            
            /**
            * The maximum user of a layer.
            */
            static MaxUser: Editor.Model.LayerId
            
            /**
            * The minimum user of a layer.
            */
            static MinUser: Editor.Model.LayerId
            
            /**
            * The layer which is used by the Orthographic camera by default.
            */
            static Ortho: Editor.Model.LayerId
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The layers of a {@Editor.Assets.Scene}.
        */
        class Layers extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Add `layerId` to this entity.
            */
            add(layerId: Editor.Model.LayerId): Editor.Model.Layer
            
            /**
            * Whether the layers contain `layerId`.
            */
            contains(layerId: Editor.Model.LayerId): boolean
            
            /**
            * Get the layer with `layerId` if possible.
            */
            find(layerId: Editor.Model.LayerId): Editor.Model.Layer | undefined
            
            /**
            * Remove `layerId` from this entity.
            */
            remove(layerId: Editor.Model.LayerId): void
            
            /**
            * Check if another layer can be added to this entity.
            
            * @readonly
            */
            canAdd: boolean
            
            /**
            * The LayerSet which represents this entity.
            
            * @readonly
            */
            combinedIds: Editor.Model.LayerSet
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.LayerSet}.
        */
        class LayerSet {
            
            /** @hidden */
            protected constructor()
            
            contains(other: Editor.Model.LayerSet): boolean
            
            except(other: Editor.Model.LayerSet): Editor.Model.LayerSet
            
            intersect(other: Editor.Model.LayerSet): Editor.Model.LayerSet
            
            isEmpty(): boolean
            
            toArray(): Editor.Model.LayerId[]
            
            union(other: Editor.Model.LayerSet): Editor.Model.LayerSet
            
            /**
            * @readonly
            */
            mask: number
            
            static PredefinedIds(): Editor.Model.LayerSet
            
            static fromBit(bit: number): Editor.Model.LayerSet
            
            static fromId(layerId: Editor.Model.LayerId): Editor.Model.LayerSet
            
            static fromMask(mask: number): Editor.Model.LayerSet
            
            static All: Editor.Model.LayerSet
            
            static None: Editor.Model.LayerSet
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The various cameras which will be activated when this project's Lens turns on.
        */
        enum LensActivationCamera {
            /**
            * Opens the front camera by default.
            */
            Front,
            /**
            * Opens the back camera by default.
            */
            Rear
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The various contexts in which this Lens can be used.
        */
        enum LensApplicability {
            /**
            * Lens is usable on the front camera.
            */
            Front,
            /**
            * Lens is usable on the back camera.
            */
            Back
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The metadata of an entity.
        */
        class Meta extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether the entity can be created.
            
            * @readonly
            */
            isAbstract: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Metadata of the current project's Lens.
        */
        class MetaInfo {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Sets the `icon` as the Lens' icon.
            */
            setIcon(externalPath: Editor.Path): void
            
            /**
            * The camera which will be activated when this Lens is turned on. 
            */
            activationCamera: Editor.Model.LensActivationCamera
            
            /**
            * The absolute path to the Lens Icon.
            
            * @readonly
            */
            iconPath: Editor.Path
            
            /**
            * Whether an Lens icon has been set.
            
            * @readonly
            */
            isIconSet: boolean
            
            /**
            * Where the Lens can be used.
            */
            lensApplicability: Editor.Model.LensApplicability[]
            
            /**
            * The publicly visible name of the Lens.
            */
            lensName: string
            
            /**
            * Checks whether the Lens Name is valid. See Project Info guide to learn more.
            */
            static isLensNameValid(lensName: string): boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class ObjectContext extends Editor.IContext {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            selection: Editor.Model.SceneObject[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        enum PackageOption {
            Packed,
            Unpacked
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * An entity which can be turned into a prefab, such as {@link Editor.Model.SceneObject}. 
        */
        class Prefabable extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class Project extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            onEntityAdded(typeName: string): signal1<Editor.Model.Entity, void>
            
            onEntityAdding(typeName: string): signal1<Editor.Model.Entity, void>
            
            onEntityRemoved(typeName: string): signal1<import('LensStudio:Uuid').Uuid, void>
            
            onEntityUpdated(typeName: string): signal1<Editor.Model.Entity, void>
            
            onEntityUpdating(typeName: string): signal1<Editor.Model.Entity, void>
            
            save(): void
            
            saveTo(absoluteFilePath: Editor.Path): void
            
            /**
            * @readonly
            */
            assetManager: Editor.Model.AssetManager
            
            /**
            * @readonly
            */
            assetsDirectory: Editor.Path
            
            /**
            * @readonly
            */
            cacheDirectory: Editor.Path
            
            /**
            * @readonly
            */
            history: any
            
            metaInfo: Editor.Model.MetaInfo
            
            /**
            * @readonly
            */
            projectDirectory: Editor.Path
            
            /**
            * @readonly
            */
            projectFile: Editor.Path
            
            /**
            * @readonly
            */
            scene: Editor.Assets.Scene
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        enum ProjectSaveMode {
            Default,
            Autosave
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * How a file should be imported into the project.
        */
        enum ResultType {
            /**
            * Lens Studio will decide how the file will be imported. 
            */
            Auto,
            /**
            * The imported entities will be readonly. However, the entity cann also be updated from source file.
            */
            Packed,
            /**
            * The entity is unpacked and the entities within exists as if it was imported individually.
            */
            Unpacked
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The same entity as in Lens Scripting.   Can contain one or more {@link Editor.Components.Component}. Additionally, it can have zero or more scene objects which is a child of it.  @see {@link LensScripting.SceneObject}.
        */
        class SceneObject extends Editor.Model.Prefabable {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Add a scene object as a child of this object at a specified `pos`.
            */
            addChildAt(value: Editor.Model.SceneObject, pos?: number): void
            
            /**
            * Add a new {@link Editor.Components.Component} by entityType to this object..
            */
            addComponent(entityType: string): Editor.Components.Component
            
            /**
            * Add the component `value` at the specified `pos`.
            */
            addComponentAt(value: Editor.Components.Component, pos?: number): void
            
            /**
            * Remove all children from this object.
            */
            clearChildren(): void
            
            /**
            * Remove all components from this scene object.
            */
            clearComponents(): void
            
            copy(): Editor.Model.SceneObject
            
            /**
            * Destroy this scene object. All references to it becomes invalid.
            */
            destroy(): void
            
            /**
            * Get a specific object at the specified `pos`.
            */
            getChildAt(pos: number): Editor.Model.SceneObject
            
            /**
            * Get the number of children on this object.
            */
            getChildrenCount(): number
            
            /**
            * Get the first component of `entityType`.
            */
            getComponent<K extends keyof ComponentNameMap>(entityType: string): ComponentNameMap[K]
            
            /**
            * Get the component at the specified `pos`.
            */
            getComponentAt(pos: number): Editor.Components.Component
            
            /**
            * Get all the components of `entityType` on this object.
            */
            getComponents<K extends keyof ComponentNameMap>(entityType: string): ComponentNameMap[K][]
            
            /**
            * Get the number of components on this object.
            */
            getComponentsCount(): number
            
            /**
            * Get the parent of this scene object.
            */
            getParent(): Editor.Model.SceneObject
            
            /**
            * Get the position of a specific object, if the object is a child of this object.
            */
            indexOfChild(value: Editor.Model.SceneObject): number | undefined
            
            /**
            * Get the position of a specific component `value` on this object. 
            */
            indexOfComponent(value: Editor.Components.Component): number | undefined
            
            /**
            * Move `child` in the order of children on this object.
            */
            moveChild(child: Editor.Model.SceneObject, destination: number): void
            
            /**
            * Move the component `value` to a specified `pos`.
            */
            moveComponent(origin: number, destination: number): void
            
            /**
            * Remove a child from this from this scene object.
            */
            removeChild(child: Editor.Model.SceneObject): void
            
            /**
            * Remove a child at the specified `pos`.
            */
            removeChildAt(pos: number): void
            
            /**
            * Remove the first component of `entityType` from this object.
            */
            removeComponent(entityType: string): boolean
            
            /**
            * Remove the components at the specified `pos`.
            */
            removeComponentAt(pos: number): void
            
            /**
            * Set the child scene object `value` to be at the specified `pos`.
            */
            setChildAt(pos: number, value: Editor.Model.SceneObject): void
            
            /**
            * Set the component `value` to be at the specified `pos`.
            */
            setComponentAt(pos: number, value: Editor.Components.Component): void
            
            /**
            * Set the parent of this scene object.
            */
            setParent(newParent: Editor.Model.SceneObject, position?: number): void
            
            /**
            * A list of scene objects that is a child of this scene object.
            */
            children: Editor.Model.SceneObject[]
            
            /**
            * A list of components that is a child of this scene object.
            */
            components: Editor.Components.Component[]
            
            /**
            * Whether this scene object is enabled or disabled.
            */
            enabled: boolean
            
            /**
            * Whether this scene object contains any component which is of type `Editor.Components.Visual`.
            
            * @readonly
            */
            hasVisuals: boolean
            
            /**
            * The layerSet this scene object is on.
            */
            layers: Editor.Model.LayerSet
            
            /**
            * The transform of this scene object relative to its parent.
            */
            localTransform: Editor.Model.TransformEntity
            
            /**
            * The name of the scene object.
            */
            name: string
            
            /**
            * @readonly
            */
            topOwner: Editor.Assets.ObjectOwner
            
            /**
            * The transform of this scene object relative to the scene its in.
            */
            worldTransform: Editor.Model.WorldTransformAccessor
            
            static commonParent(sceneObjects: Editor.Model.SceneObject[]): Editor.Model.SceneObject
            
            static staticMeta(): Editor.Model.Meta
            
            static topLevel(sceneObjects: Editor.Model.SceneObject[]): Editor.Model.SceneObject[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class SourcePath {
            constructor(relativeToRoot: Editor.Path, rootDirectory: Editor.Model.SourceRootDirectory)
            
            hasExtension(extension: string): boolean
            
            replaceFileNameBase(newBaseName: string): Editor.Model.SourcePath
            
            toString(): string
            
            /**
            * @readonly
            */
            extension: string
            
            /**
            * @readonly
            */
            fileName: Editor.Path
            
            /**
            * @readonly
            */
            fileNameBase: string
            
            /**
            * @readonly
            */
            isEmpty: boolean
            
            /**
            * @readonly
            */
            parent: Editor.Model.SourcePath
            
            /**
            * @readonly
            */
            relativeToProject: Editor.Path
            
            /**
            * @readonly
            */
            relativeToRoot: Editor.Path
            
            /**
            * @readonly
            */
            rootDirectory: Editor.Path
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        enum SourceRootDirectory {
            Assets,
            Packages
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class TransformEntity extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            position: vec3
            
            rotation: vec3
            
            scale: vec3
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        class WorldTransformAccessor extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            position: vec3
            
            rotation: vec3
            
            scale: vec3
            
        }
    
    }

}

declare namespace Editor {
    class PackageMetadata {
        
        /** @hidden */
        protected constructor()
        
        assetId: string
        
        filePaths: string[]
        
        name: string
        
        tags: string[]
        
        uid: import('LensStudio:Uuid').Uuid
        
        versionMajor: number
        
        versionMinor: number
        
        versionPatch: number
        
    }

}

declare namespace Editor {
    /**
    * A path in the filesystem, or Asset Manager. Useful for things like importing files into Lens Studio through the {@link Editor.Model.AssetManager}. 
    
    * @example
    * ```js
    * // Get access to the project's assetManager
    * const model = this.pluginSystem.findInterface(Editor.Model.IModel);
    * const assetManager = model.project.assetManager;
    
    * // Locate the shader pass we want to import
    * const resourceLoc = import.meta.resolve('Resources/myMesh.ss_graph');
    * const absGraphPath = new Editor.Path(resourceLoc);
    
    * // Import the shader pass
    * const pathInAssetManager = new Editor.Path('');
    * const meta = await assetManager.importExternalFileAsync(absolutePath, pathInAssetManager, Editor.Model.ResultType.Packed);
    * ```
    */
    class Path {
        /**
        * Construct a new path object.
        */
        constructor(str: string)
        
        /**
        * Returns a new path object relative to the `rootPath`.
        */
        appended(path: Editor.Path): Editor.Path
        
        /**
        * Whether the path object has a file extension in the end.
        */
        hasExtension(extension: string): boolean
        
        /**
        * Whether the current path is inside `directory`. 
        */
        isInside(directory: Editor.Path): boolean
        
        /**
        * Returns a new path object relative to the `rootPath`.
        */
        relative(rootPath: Editor.Path): Editor.Path
        
        /**
        * Rename the extension of the file. 
        */
        replaceExtension(newExtension: string): Editor.Path
        
        replaceFileNameBase(name: string): Editor.Path
        
        /**
        * Returns the current path as a string.
        */
        toString(): string
        
        /**
        * The extension of the file of the current path object (without dot).
        
        
        * @readonly
        */
        extension: string
        
        /**
        * The name of the file, including its extension, in the current path object.
        
        * @readonly
        */
        fileName: Editor.Path
        
        /**
        * The name of the file, without its extension, in the current path object.
        
        * @readonly
        */
        fileNameBase: string
        
        /**
        * @readonly
        */
        isEmpty: boolean
        
        /**
        * A path to the parent folder of the current path object.
        
        * @readonly
        */
        parent: Editor.Path
        
    }

}

declare namespace Editor {
    enum PlaybackMode {
        Single,
        Loop,
        PingPong
    }

}

declare namespace Editor {
    /**
    * Provides access to the Lens Studio editor plugins, components, and interfaces
    
    * @example
    * ```js
    * import { Preset } from 'LensStudio:Preset';
    
    * export class ObjectPrefabPreset extends Preset {
    *     static descriptor() {
    *         return {
    *             id: 'Com.Snap.ObjectPrefabPreset',
    *             interfaces: Preset.descriptor().interfaces,
    *             dependencies: [Editor.Model.IModel],
    *             name: 'Object Prefab',
    *             description: '',
    *             icon: Editor.Icon.fromFile(import.meta.resolve('../Resources/ObjectPrefab.svg')),
    *             section: 'General',
    *             entityType: 'ObjectPrefab'
    *         };
    *     }
    *     constructor(pluginSystem) {
    *         super(pluginSystem);
    *     }
    *     create(destination) {
    *         const model = this.pluginSystem.findInterface(Editor.Model.IModel);
    *         const assetManager = model.project.assetManager;
    
    *         const prefab = assetManager.createNativeAsset('ObjectPrefab', 'ObjectPrefab', destination);
    
    *         const object = prefab.addSceneObject(null);
    *         object.name = 'Object Prefab';
    
    *         return prefab;
    *     }
    * }
    * ```
    
    * ```js
    * // Triggering another plugin from a plugin
    * import { MyOtherPluginPreset } from './MyOtherPluginPreset.js';
    * const myOtherPluginPreset = new MyOtherPluginPreset(this.pluginSystem);
    * myOtherPluginResult = await myOtherPluginPreset.createAsync();
    * ```
    
    */
    class PluginSystem extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        create(descriptor: IPluginDescriptor): Editor.IPlugin
        
        /**
        * Get various interfaces to the Lens Studio editor, such as its {@link Editor.Model} and {@link Editor.Model.AssetManager}. 
        */
        findInterface(id: any): Editor.IInterface
        
        loadDirectory(directory: Editor.Path): void
        
        unloadDirectory(directory: Editor.Path): void
        
        /**
        * @readonly
        */
        descriptors: IPluginDescriptor[]
        
    }

}

declare namespace Editor {
    /**
    * @beta
    */
    class Point {
        /**
        * @beta
        */
        constructor()
        
        /**
        * @beta
        */
        x: number
        
        /**
        * @beta
        */
        y: number
        
    }

}

declare namespace Editor {
    /**
    * Used with {@link Editor.Components.ScreenTransform}.
    
    * @beta
    */
    class Rect {
        /**
        * @beta
        */
        constructor()
        
        /**
        * @beta
        */
        getCenter(): vec2
        
        /**
        * @beta
        */
        getSize(): vec2
        
        /**
        * @beta
        */
        setCenter(center: vec2): void
        
        /**
        * @beta
        */
        setSize(size: vec2): void
        
        /**
        * @beta
        */
        toVec4(): vec4
        
        /**
        * @beta
        */
        bottom: number
        
        /**
        * @beta
        */
        left: number
        
        /**
        * @beta
        */
        leftBottom: vec2
        
        /**
        * @beta
        */
        right: number
        
        /**
        * @beta
        */
        rightTop: vec2
        
        /**
        * @beta
        */
        top: number
        
        /**
        * @beta
        */
        static create(left: number, right: number, bottom: number, top: number): Editor.Rect
        
        /**
        * @beta
        */
        static fromMinMax(min: vec2, max: vec2): Editor.Rect
        
    }

}

declare namespace Editor {
    /**
    * @beta
    */
    class ScopedConnection extends Editor.IGuard {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @beta
        */
        disconnect(): boolean
        
        /**
        * @readonly
        
        * @beta
        */
        isConnected: boolean
        
    }

}

declare namespace Editor {
    class Shape {
        
        /** @hidden */
        protected constructor()
        
        static createBoxShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Box
        
        static createCapsuleShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Capsule
        
        static createConeShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Cone
        
        static createCylinderShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Cylinder
        
        static createLevelSetShape(scene: Editor.Assets.Scene): Editor.Components.Physics.LevelSet
        
        static createMeshShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Mesh
        
        static createSphereShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Sphere
        
    }

}

declare namespace Editor {
    /**
    * Used with {@link Editor.Assets.RenderTarget}.
    
    * @beta
    */
    class Size {
        /**
        * @beta
        */
        constructor(x: number, y: number)
        
        /**
        * @beta
        */
        equal(value: Editor.Size): boolean
        
        /**
        * @beta
        */
        isEmpty(): boolean
        
        /**
        * @beta
        */
        toVec2(): vec2
        
        /**
        * @beta
        */
        x: number
        
        /**
        * @beta
        */
        y: number
        
        /**
        * @beta
        */
        static fromVec2(value: vec2): Editor.Size
        
    }

}

declare namespace Editor {
    /**
    * Used with {@link Editor.Model.SceneObject}.
    
    * @beta
    */
    class Transform {
        /**
        * @beta
        */
        constructor(position: vec3, rotation: vec3, scale: vec3)
        
        /**
        * @beta
        */
        position: vec3
        
        /**
        * @beta
        */
        rotation: vec3
        
        /**
        * @beta
        */
        scale: vec3
        
    }

}

declare class IPanelPlugin extends Editor.IPlugin {
    
    /** @hidden */
    protected constructor()
    
    /**
    * @readonly
    */
    title: string
    
}

declare class IPluginDescriptor extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
    * @readonly
    */
    dependencies: Editor.InterfaceId[]
    
    /**
    * @readonly
    */
    description: string
    
    /**
    * @readonly
    */
    id: string
    
    /**
    * @readonly
    */
    interfaces: Editor.InterfaceId[]
    
    /**
    * @readonly
    */
    name: string
    
}

/**
* @module LensStudio:Analytics
*/
declare module "LensStudio:Analytics" {
}

/**
* Before using anything in this namespace, make sure to import `LensStudio:App`.

* @module LensStudio:App

* @example
* ```js
* import * as app from "LensStudio:App"
* const version = app.version;
* ```
*/
declare module "LensStudio:App" {
    /**
    * A map containing the PATH and PWD environment variables of the current Lens Studio process.
    */
    let env: any
    
    /**
    * The Lens Studio version.
    */
    let version: string
    
}

/**
* @module LensStudio:AssetInstantiator
*/
declare module "LensStudio:AssetInstantiator" {
}

declare module "LensStudio:AssetInstantiator" {
    class AssetInstantiator extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        instantiate(asset: Editor.Assets.Asset, scene: Editor.Assets.Scene, target: Editor.Model.SceneObject): Editor.Model.Prefabable[]
        
        prepareDependencies(asset: Editor.Assets.Asset, manager: Editor.Model.AssetManager): Promise<Editor.Assets.Asset[]>
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

declare module "LensStudio:AssetInstantiator" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
        canInstantiate: (arg1: Editor.Assets.Asset) => any
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:AssetLibrary`.

* @module LensStudio:AssetLibrary
*/
declare module "LensStudio:AssetLibrary" {
}

declare module "LensStudio:AssetLibrary" {
    /**
    * A handle for an asset from the Asset Library.
    */
    class Asset {
        
        /** @hidden */
        protected constructor()
        
        /**
        * The id of the asset.
        */
        assetId: string
        
        /**
        * The name of the asset.
        */
        assetName: string
        
        /**
        * The type of the asset.
        */
        assetType: AssetType
        
        /**
        * A handle for the resources contained in the asset that can be downloaded.
        */
        resources: Resource[]
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A filter used to narrow down an AssetListRequest.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetFilter {
        constructor()
        
        categoryId: string
        
        pagination: Pagination
        
        searchText: string
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A request object for finding assets in the Asset Library.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetListRequest {
        constructor(environmentSetting: EnvironmentSetting, assetFilter: AssetFilter)
        
        /**
        * @readonly
        */
        assetFilter: AssetFilter
        
        /**
        * @readonly
        */
        environmentSetting: EnvironmentSetting
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A handle returned by the  {@link "LensStudio:AssetLibrary".AssetListService}.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetListResponse {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A handle to the  {@link "LensStudio:AssetLibrary".AssetListService} which can provide a list of assets based on the passed in parameters.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetListService extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The result of a `fetch` call by the {@link "LensStudio:AssetLibrary".AssetListService}, which provides you a list of matching assets in the Asset Library.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetListSuccess {
        
        /** @hidden */
        protected constructor()
        
        assets: Asset[]
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The types of assets that might be provided by the {@link "LensStudio:AssetLibrary"}.
    */
    enum AssetType {
        Invalid,
        Texture,
        AnimatedTexture,
        Material,
        Mesh3D,
        Script,
        ObjectPreset,
        ObjectPrefab,
        Audio,
        MLModel,
        ProjectTemplate,
        Music,
        RemoteApi,
        CustomComponent,
        Video,
        Guide,
        Plugin,
        AssetPackage,
        Default
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The Asset Library environment which assets should be searched within. In most cases `Production` should be used. Used with {@link "LensStudio:AssetLibrary".EnvironmentSetting}.   @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    enum Environment {
        Invalid,
        Production,
        Staging
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A configuration object that describes what Asset Library environment should be accessed.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class EnvironmentSetting {
        constructor()
        
        environment: Environment
        
        space: Space
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A handle that provides access to the AssetLibraryListService.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class IAssetLibraryProvider extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        musicService: MusicListService
        
        /**
        * @readonly
        */
        service: AssetListService
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare module "LensStudio:AssetLibrary" {
    class LicensedMusic {
        
        /** @hidden */
        protected constructor()
        
        static importMusic(musicAsset: MusicAsset, project: Editor.Model.Project): boolean
        
    }

}

declare module "LensStudio:AssetLibrary" {
    class MusicAsset {
        
        /** @hidden */
        protected constructor()
        
        artistName: string
        
        assetId: string
        
        assetName: string
        
        assetType: AssetType
        
        resources: Resource[]
        
    }

}

declare module "LensStudio:AssetLibrary" {
    class MusicListResponse {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:AssetLibrary" {
    class MusicListService extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:AssetLibrary" {
    class MusicListSuccess {
        
        /** @hidden */
        protected constructor()
        
        musicAssets: MusicAsset[]
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Configuration for the page to be accessed in a {@link "LensStudio:AssetLibrary".AssetFilter}.
    */
    class Pagination {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        limit: number
        
        /**
        * @readonly
        */
        offset: number
        
        static singleBatch(offset: number, limit: number): Pagination
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The actual resources of an {@link "LensStudio:AssetLibrary".Asset}.
    */
    class Resource {
        
        /** @hidden */
        protected constructor()
        
        name: string
        
        uri: string
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The callback of an errored `fetch` call by the {@link "LensStudio:AssetLibrary".AssetListService}.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class ServiceError {
        
        /** @hidden */
        protected constructor()
        
        description: string
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The Asset Library space which assets should be searched within. In most cases `Public` should be used. Used with {@link "LensStudio:AssetLibrary".EnvironmentSetting}.   @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    enum Space {
        Invalid,
        Internal,
        Public
    }

}

/**
* @module LensStudio:ChatAssistant
*/
declare module "LensStudio:ChatAssistant" {
}

/**
* @module LensStudio:ChatTool
*/
declare module "LensStudio:ChatTool" {
}

declare module "LensStudio:ChatTool" {
    class ChatTool extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        execute(parameters: Parameters): Promise<Result>
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

declare module "LensStudio:ChatTool" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
        schema: any
        
    }

}

declare module "LensStudio:ChatTool" {
    class IChatToolRegistry extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        execute(descriptor: IPluginDescriptor, parameters: Parameters): Promise<Result>
        
        /**
        * @readonly
        */
        toolDeregistered: signal1<IPluginDescriptor, void>
        
        /**
        * @readonly
        */
        toolRegistered: signal1<IPluginDescriptor, void>
        
        /**
        * @readonly
        */
        tools: IPluginDescriptor[]
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare module "LensStudio:ChatTool" {
    class Parameters {
        constructor()
        
        data: any
        
    }

}

declare module "LensStudio:ChatTool" {
    class Result {
        constructor()
        
        data: any
        
        error: string
        
    }

}

/**
* @module LensStudio:Clipboard
*/
declare module "LensStudio:Clipboard" {
    let clipboard: import('LensStudio:Clipboard').Clipboard
    
}

declare module "LensStudio:Clipboard" {
    class Clipboard {
        
        /** @hidden */
        protected constructor()
        
        text: string
        
    }

}

/**
* @module LensStudio:CoreService
*/
declare module "LensStudio:CoreService" {
}

declare module "LensStudio:CoreService" {
    class CoreService extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        start(): void
        
        stop(): void
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

declare module "LensStudio:CoreService" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
    }

}

/**
* @module LensStudio:DialogPlugin
*/
declare module "LensStudio:DialogPlugin" {
}

declare module "LensStudio:DialogPlugin" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
        menuActionHierarchy: string[]
        
        toolbarConfig?: import('LensStudio:Ui').ToolbarConfig
        
    }

}

declare module "LensStudio:DialogPlugin" {
    class DialogPlugin extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        deinit(): void
        
        show(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Dialog
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* @module LensStudio:EditorPlugin
*/
declare module "LensStudio:EditorPlugin" {
}

declare module "LensStudio:EditorPlugin" {
    import {EditorDescriptor} from "LensStudio:PanelPlugin" 
    
    class Descriptor extends EditorDescriptor {
        constructor()
        
        canEdit: (arg1: Editor.Model.Entity) => any
        
    }

}

declare module "LensStudio:EditorPlugin" {
    class EditorPlugin extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        createWidget(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Widget
        
        deinit(): void
        
        edit(entities: Editor.Model.Entity[]): boolean
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* @module LensStudio:EntityGenerator
*/
declare module "LensStudio:EntityGenerator" {
}

declare module "LensStudio:EntityGenerator" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
        displayOrder: number
        
        entityType: string
        
        icon: Editor.Icon
        
    }

}

declare module "LensStudio:EntityGenerator" {
    class EntityGenerator extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        generate(): Promise<Editor.Model.Entity>
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:FileSystem` and add `filesystem` in your plugin's `module.json`.

* @module LensStudio:FileSystem

* @example
* ```js
* // module.json
* {
*     "main": "main.js",
*     "permissions": ["filesystem"]
* }
* ```

* ```js
* // main.js
* import * as fs from 'LensStudio:FileSystem';
* let s = fs.readFile(new Editor.Path(import.meta.resolve('ellipsis.txt')));
* ```
*/
declare module "LensStudio:FileSystem" {
    /**
    * `Options` can take recursive and force. The recursive parameter controls whether to read into subdirectories. The force parameter controls whether duplicated contents will be overwritten during the copying process. 
    
    * ```js
    * fs.copyDir(Tests.srcDir, Tests.destDir, {force: true, recursive: true});
    * fs.copyDir(Tests.srcDir, Tests.destDir, null);
    * fs.copyDir(Tests.srcDir, Tests.destDir, {});
    * fs.copyDir(Tests.srcDir, Tests.destDir, {force: false});
    * ```
    */
    export function copyDir(src: Editor.Path, dest: Editor.Path, options: CopyDirOptions): void
    
    /**
    * Copies a file from `src` to `dest`.
    */
    export function copyFile(src: Editor.Path, dest: Editor.Path): void
    
    /**
    * Create a directory at `path`.
    */
    export function createDir(path: Editor.Path, options: CreateDirOptions): void
    
    /**
    * Checks if a file or directory exists at `path`.
    */
    export function exists(path: Editor.Path): boolean
    
    /**
    * Checks whether a `path` is a directory.
    */
    export function isDirectory(path: Editor.Path): boolean
    
    /**
    * Checks whether a `path` is a file.
    */
    export function isFile(path: Editor.Path): boolean
    
    /**
    * Returns the content of `path` as bytes.
    */
    export function readBytes(path: Editor.Path): Uint8Array
    
    /**
    * Returns an array of paths relative to the specified one.
    
    * `Options` can take a single parameter named `recursive` (`false` by default):
    
    *  ```js
    * fs.readDir(Tests.destDir, {recursive: false});
    * ```
    
    */
    export function readDir(path: Editor.Path, options: ReadDirOptions): Editor.Path[]
    
    /**
    * Returns the content of `path`.
    */
    export function readFile(path: Editor.Path): string
    
    export function realPath(path: Editor.Path): Editor.Path
    
    /**
    * Removes the `path`.
    */
    export function remove(path: Editor.Path): void
    
    /**
    * Renames the `path`.
    */
    export function rename(oldPath: Editor.Path, newPath: Editor.Path): void
    
    /**
    * Get the size of `path`.
    */
    export function size(path: Editor.Path): number
    
    /**
    * Writes a file to `path` given the `data`.
    */
    export function writeFile(path: Editor.Path, data: (Uint8Array|string)): void
    
}

declare module "LensStudio:FileSystem" {
    /**
    * Used with {@link "LensStudio:FileSystem".CopyDirOptions}. 
    */
    class CopyDirOptions {
        
        /** @hidden */
        protected constructor()
        
        force: boolean
        
        recursive: boolean
        
    }

}

declare module "LensStudio:FileSystem" {
    /**
    * Used with {@link "LensStudio:FileSystem".CreateDirOptions}.
    */
    class CreateDirOptions {
        
        /** @hidden */
        protected constructor()
        
        recursive: boolean
        
    }

}

declare module "LensStudio:FileSystem" {
    /**
    * Used with {@link "LensStudio:FileSystem".ReadDirOptions}.
    */
    class ReadDirOptions {
        
        /** @hidden */
        protected constructor()
        
        recursive: boolean
        
    }

}

declare module "LensStudio:FileSystem" {
    /**
    * Helper to create temporary directory.
    
    * @example
    * ```js
    * import * as fs from 'LensStudio:FileSystem';
    
    * const resourceName = "resourceName.txt";
    
    * // Create a temporary dir
    * const tempDir = fs.TempDir.create();
    
    * // Create a path that we want to write file to
    * const resourcePath = tempDir.path;
    * resoursePath.append(resourceName);
    
    * // Write to the file
    * fs.writeFile(resourceName, "Hello World");
    * ```
    */
    class TempDir extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        path: Editor.Path
        
        /**
        * Creates a temporary directory which will be deleted the moment all references to it disappears.
        */
        static create(): TempDir
        
    }

}

declare module "LensStudio:FileSystem" {
    class Watcher extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        start(): void
        
        stop(): void
        
        /**
        * @readonly
        */
        isWatching: boolean
        
        /**
        * @readonly
        */
        onAdded: signal1<Editor.Path, void>
        
        /**
        * @readonly
        */
        onModified: signal1<Editor.Path, void>
        
        /**
        * @readonly
        */
        onMoved: signal2<Editor.Path, Editor.Path, void>
        
        /**
        * @readonly
        */
        onRemoved: signal1<Editor.Path, void>
        
        /**
        * @readonly
        */
        path: Editor.Path
        
        static create(path: Editor.Path): Watcher
        
    }

}

/**
* @module LensStudio:GuiService
*/
declare module "LensStudio:GuiService" {
}

declare module "LensStudio:GuiService" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
    }

}

declare module "LensStudio:GuiService" {
    class GuiService extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        start(): void
        
        stop(): void
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* @module LensStudio:LensBasedEditorView
*/
declare module "LensStudio:LensBasedEditorView" {
}

/**
* @module LensStudio:Logger
*/
declare module "LensStudio:Logger" {
}

declare module "LensStudio:Logger" {
    class IUserLogCollector extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        onRevealLogRequest: signal1<string, void>
        
        static interfaceId: Editor.InterfaceId
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:ModelUI`.

* @module LensStudio:ModelUi
*/
declare module "LensStudio:ModelUi" {
}

declare module "LensStudio:ModelUi" {
    import {LineEdit} from "LensStudio:Ui" 
    
    class EntityReferencePickerLine extends LineEdit {
        constructor(assetManager: Editor.Model.AssetManager, entityPrototypeRegistry: Editor.Model.IEntityPrototypeRegistry, entityType: string, parent: import('LensStudio:Ui').Widget)
        
        /** @internal */
        static create(widget: EntityReferencePickerLine): EntityReferencePickerLine
        
        /**
        * @readonly
        */
        onAssetHighlight: signal0<void>
        
        /**
        * @readonly
        */
        onEntityChoose: signal0<void>
        
        /**
        * @readonly
        */
        onEntityClear: signal0<void>
        
        /**
        * @readonly
        */
        onEntityDrop: signal1<Editor.Model.Entity, void>
        
        /**
        * @readonly
        */
        onEntitySelect: signal0<void>
        
    }

}

/**
* @module LensStudio:MultimediaWidgets
*/
declare module "LensStudio:MultimediaWidgets" {
}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Network` and add `network` in your plugin's `module.json`. 

* @module LensStudio:Network

* @example
* ```js
* // module.json
* {
*     "main": "main.js",
*     "permissions": ["network"]
* }
* ```

* ```js
* // main.js
* import * as network from 'LensStudio:Network';
* ```
*/
declare module "LensStudio:Network" {
    /**
    * Calls a HTTPS endpoint with authorization to Snapchat. See {@link Editor.IAuthorization}. Requires `snap_auth_token` in `module.json` of your plugin.
    
    * @beta
    */
    export function performAuthorizedHttpRequest(request: HttpRequest, callback: (arg1: HttpResponse) => void): void
    
    /**
    * Calls a HTTP endpoint.
    
    * @beta
    */
    export function performHttpRequest(request: HttpRequest, callback: (arg1: HttpResponse) => void): void
    
    /**
    * Request an HTTP call with reply. You should store the reply object (e.g. in the `this` of the plugin) in order for the network connection to be maintained.
    
    * @beta
    */
    export function performHttpRequestWithReply(request: HttpRequest): HttpReply
    
}

declare module "LensStudio:Network" {
    /**
    * A TCP Server address. Use with {@link "LensStudio:Network".TcpServer}.
    */
    class Address {
        constructor()
        
        /**
        * The address of the server. You should never pass in an address that includes a schema part (e.g. "http://", "ws://", etc.).
        */
        address: string
        
        /**
        * The port to connect to.
        */
        port: number
        
    }

}

declare module "LensStudio:Network" {
    class BaseServer extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        close(): void
        
        listen(address: Address): boolean
        
        /**
        * @readonly
        */
        address: string
        
        /**
        * @readonly
        */
        onConnect: signal1<import('LensStudio:Network').BaseSocket, void>
        
        /**
        * @readonly
        */
        onError: signal1<number, void>
        
        /**
        * @readonly
        */
        port: number
        
    }

}

declare module "LensStudio:Network" {
    class BaseSocket extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        close(): void
        
        destroy(): void
        
        /**
        * @readonly
        */
        localAddress: Address
        
        /**
        * @readonly
        */
        onConnect: signal0<void>
        
        /**
        * @readonly
        */
        onData: signal1<Editor.Buffer, void>
        
        /**
        * @readonly
        */
        onEnd: signal0<void>
        
        /**
        * @readonly
        */
        onError: signal1<number, void>
        
        /**
        * @readonly
        */
        remoteAddress: Address
        
    }

}

declare module "LensStudio:Network" {
    /**
    * @beta
    */
    class FormData {
        /**
        * @beta
        */
        constructor()
        
        /**
        * @beta
        */
        append(body: (Uint8Array|string), headers: any): void
        
    }

}

declare module "LensStudio:Network" {
    /**
    * @beta
    */
    class HttpReply extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        
        * @beta
        */
        onData: signal1<Editor.Buffer, void>
        
        /**
        * @readonly
        
        * @beta
        */
        onEnd: signal1<import('LensStudio:Network').HttpResponse, void>
        
        /**
        * @readonly
        
        * @beta
        */
        onError: signal1<import('LensStudio:Network').HttpResponse, void>
        
    }

}

declare module "LensStudio:Network" {
    /**
    * A HTTP Request configuration. Use with {@link "LensStudio:Network".performHttpRequestWithReply}.
    
    * @beta
    
    * @example
    * ```js
    * // Note: reply object needs to be stored (e.g. in `this` object of the plugin) 
    * // in order for the network connection to be maintained.
    * const reply = performHttpRequestWithReply(httpRequest);
    * reply.onData.connect((buffer) => {
    *   console.log('Received data chunk: ' + buffer.toString());
    * });
    * reply.onEnd.connect(response => {
    *   console.log(response.statusCode);
    * });
    * reply.onError.connect(response => {});
    * ```
    */
    class HttpRequest {
        /**
        * @beta
        */
        constructor()
        
        /**
        * @beta
        */
        authorization: Editor.IAuthorization
        
        /**
        * The body for the HTTP Request.
        
        * @beta
        */
        body: (Uint8Array|import('LensStudio:Network').FormData|string)
        
        /**
        * The content type of the request body.
        
        * @beta
        */
        contentType: string
        
        /**
        * The header for the HTTP request.
        
        * @beta
        */
        headers: any
        
        /**
        * The HTTP method to send the request with.
        
        * @beta
        */
        method: HttpRequest.Method
        
        /**
        * The URL where the request should be made to.
        
        * @beta
        */
        url: string
        
    }

}

declare module "LensStudio:Network" {
    namespace HttpRequest {
        /**
        * The method in which to send the HTTP request. Use with {@link "LensStudio:Network".HttpRequest}.
        
        * @beta
        */
        enum Method {
            /**
            * @beta
            */
            Get,
            /**
            * @beta
            */
            Post,
            /**
            * @beta
            */
            Put,
            /**
            * @beta
            */
            Delete
        }
    
    }

}

declare module "LensStudio:Network" {
    /**
    * An HTTP response, received from the callback to performing a request, such as through: {@link "LensStudio:Network".performHttpRequestWithReply}, or {@link "LensStudio:RemoteServiceModule".performApiRequest}.
    
    * @beta
    */
    class HttpResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
        * The body of this response.
        
        * @readonly
        
        * @beta
        */
        body: Editor.Buffer
        
        /**
        * The content type of this response.
        
        * @readonly
        
        * @beta
        */
        contentType: string
        
        /**
        * The error of this response, if applicable.
        
        * @readonly
        
        * @beta
        */
        error: string
        
        /**
        * The headers of this response.
        
        * @readonly
        
        * @beta
        */
        headers: any
        
        /**
        * The HTTP status code of this response.
        
        * @readonly
        
        * @beta
        */
        statusCode: number
        
    }

}

declare module "LensStudio:Network" {
    /**
    * A class to accept TCP connetions. Useful for receiving streaming data. It's also able to send back responses.
    */
    class TcpServer extends BaseServer {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Create a TCP Server.
        */
        static create(): TcpServer
        
    }

}

declare module "LensStudio:Network" {
    /**
    * TCP socket for use with {@link "LensStudio:Network".TcpSocket}. 
    
    * @example
    * ```js
    * import * as Network from "LensStudio:Network"
    
    * export default class TcpServerManager {
    *   constructor() {
    *     this.server = Network.TcpServer.create()
    *     this.connections = []
    *     this.sockets = []
    *     this.onClientConnected = null
    *     this.onClientDataReceived = null
    *     this.onClientDisconnected = null
    *     this.onClientSocketError = null
    *     this.enableLogging = false
    
    *     // Setup listeners
    *     this.connections.push(
    *       this.server.onConnect.connect(socket => {
    *         //save sockets to the persistent array so they dont get garbage collected
    *         this.sockets.push(socket)
    
    *         if (this.enableLogging) {
    *           console.log(`Incoming connection from ${socket.remoteAddress.address}:${socket.remoteAddress.port}`)
    *         }
    
    *         if (this.onClientConnected) {
    *           this.onClientConnected(socket)
    *         }
    
    *         this.connections.push(
    *           socket.onData.connect(data => {
    *             if (this.enableLogging) {
    *               console.log(`Received data from socket: ${data}`)
    *             }
    
    *             if (this.onClientDataReceived) {
    *               this.onClientDataReceived(data, socket)
    *             }
    *           })
    *         )
    
    *         this.connections.push(
    *           socket.onEnd.connect(() => {
    *             if (this.enableLogging) {
    *               console.log(`Socket connected to ${socket.remoteAddress.address}:${socket.remoteAddress.port} disconnected from the server.`)
    *             }
    
    *             if (this.onClientDisconnected) {
    *               this.onClientDisconnected(socket)
    *             }
    *           })
    *         )
    
    *         this.connections.push(
    *           socket.onError.connect(error => {
    *             if (this.enableLogging) {
    *               logger.logException(`Socket error: ${error}`)
    *             }
    
    *             if (this.onClientSocketError) {
    *               this.onClientSocketError(error, socket)
    *             }
    *           })
    *         )
    *       })
    *     )
    *   }
    
    *   start (address, port) {
    *     const localhostAddr = new Network.Address()
    *     localhostAddr.address = address
    *     localhostAddr.port = port
    *     try {
    *       this.server.listen(localhostAddr)
    *       console.log(`Server started at ${address}:${port}`)
    *     } catch (e) {
    *       console.log("Failed to start the server: " + e)
    *     }
    *   }
    
    *   close (){
    *     // Disconnect all the connections
    *     this.connections.forEach(connection => connection.disconnect())
    *     this.connections = []
    *     // Close the server
    *     this.server.close()
    *   }
    * }
    * ```
    */
    class TcpSocket extends BaseSocket {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Write to the socket.
        */
        write(data: (Uint8Array|string)): number
        
    }

}

/**
* @module LensStudio:OverlayPlugin
*/
declare module "LensStudio:OverlayPlugin" {
}

declare module "LensStudio:OverlayPlugin" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
    }

}

declare module "LensStudio:OverlayPlugin" {
    class OverlayPlugin extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        createWidget(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Widget
        
        deinit(): void
        
        requestHide(): void
        
        requestShow(): void
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* @module LensStudio:PanelPlugin
*/
declare module "LensStudio:PanelPlugin" {
}

declare module "LensStudio:PanelPlugin" {
    class Descriptor extends PanelDescriptor {
        constructor()
        
    }

}

declare module "LensStudio:PanelPlugin" {
    class EditorDescriptor extends PanelDescriptor {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:PanelPlugin" {
    class PanelDescriptor extends BaseDescriptor {
        
        /** @hidden */
        protected constructor()
        
        defaultDockState: import('LensStudio:Ui').DockState
        
        defaultSize: import('LensStudio:Ui').Size
        
        isUnique: boolean
        
        menuActionHierarchy: string[]
        
        minimumSize: import('LensStudio:Ui').Size
        
        toolbarConfig?: import('LensStudio:Ui').ToolbarConfig
        
    }

}

declare module "LensStudio:PanelPlugin" {
    class PanelPlugin extends IPanelPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        createWidget(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Widget
        
        deinit(): void
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* @module LensStudio:PluginVerifier
*/
declare module "LensStudio:PluginVerifier" {
}

declare module "LensStudio:PluginVerifier" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
        canVerify: (arg1: IPluginDescriptor) => any
        
    }

}

declare module "LensStudio:PluginVerifier" {
    class PluginVerifier extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        verify(pluginDescriptor: IPluginDescriptor, outputDir: Editor.Path): Promise<void>
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* @module LensStudio:Preset
*/
declare module "LensStudio:Preset" {
}

declare module "LensStudio:Preset" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
        entityType: string
        
        icon: Editor.Icon
        
        pathsToImport: Editor.Path[]
        
        section: string
        
    }

}

declare module "LensStudio:Preset" {
    class Preset extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        create(destination: (Editor.Model.SceneObject|Editor.Path), importSettings?: any): Editor.Model.Entity
        
        createAsync(destination: (Editor.Model.SceneObject|Editor.Path), importSettings?: any): Promise<Editor.Model.Entity>
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* @module LensStudio:Preview
*/
declare module "LensStudio:Preview" {
}

declare module "LensStudio:Preview" {
    class StreamType {
        
        /** @hidden */
        protected constructor()
        
    }

}

/**
* @module LensStudio:ProjectSettingsPlugin
*/
declare module "LensStudio:ProjectSettingsPlugin" {
}

declare module "LensStudio:ProjectSettingsPlugin" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
        icon: Editor.Icon
        
        section: string
        
        title: string
        
    }

}

declare module "LensStudio:ProjectSettingsPlugin" {
    class ProjectSettingsPlugin extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        createWidget(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Widget
        
        deinit(): void
        
        setIssues(issues: (import('LensStudio:Ui').ProjectSettings.Error|import('LensStudio:Ui').ProjectSettings.Warning|import('LensStudio:Ui').ProjectSettings.NoIssue)[]): void
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* @module LensStudio:PushToDevice
*/
declare module "LensStudio:PushToDevice" {
}

/**
* Class for interacting with Snap's RemoteServiceModule. Unlike {@link "LensStudio:Network".performHttpRequestWithReply}, the API requests done here are to specific endpoints that have been registered with Snap.

* @module LensStudio:RemoteServiceModule
*/
declare module "LensStudio:RemoteServiceModule" {
    /**
    * Perform the API request.
    */
    export function performApiRequest(request: RemoteApiRequest, callback: (arg1: RemoteApiResponse) => void): void
    
}

declare module "LensStudio:RemoteServiceModule" {
    /**
    * Configuration for request through {@link "LensStudio:RemoteServiceModule".performApiRequest}
    */
    class RemoteApiRequest {
        
        /** @hidden */
        protected constructor()
        
        /**
        * The body of the request.
        */
        body: (Uint8Array|string)
        
        /**
        * The endpoint of the request (e.g. API path).
        */
        endpoint: string
        
        parameters: any
        
        /**
        * The spec id of the RemoteServiceModule. 
        */
        specId: string
        
        /**
        * Create the configuration.
        */
        static create(): RemoteApiRequest
        
    }

}

declare module "LensStudio:RemoteServiceModule" {
    class RemoteApiResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        body: Editor.Buffer
        
        /**
        * @readonly
        */
        linkedResources: RemoteApiResponse.LinkedResource[]
        
        /**
        * @readonly
        */
        statusCode: number
        
    }

}

declare module "LensStudio:RemoteServiceModule" {
    namespace RemoteApiResponse {
        class LinkedResource {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            url: string
            
        }
    
    }

}

/**
* @module LensStudio:ScriptEditor
*/
declare module "LensStudio:ScriptEditor" {
}

declare module "LensStudio:ScriptEditor" {
    class Definitions {
        
        /** @hidden */
        protected constructor()
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Serialization`.

* @module LensStudio:Serialization
*/
declare module "LensStudio:Serialization" {
}

declare module "LensStudio:Serialization" {
    /**
    * @beta
    */
    class IReader extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:Serialization" {
    /**
    * @beta
    */
    class IWriter extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @beta
        */
        getString(): string
        
    }

}

declare module "LensStudio:Serialization" {
    /**
    * Class which allows you to serialize and deserialize data from YAML. Useful for modifying layout with {@link Editor.Dock.IDockManager}.
    */
    class Yaml {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @beta
        */
        static createReader(data: string): IReader
        
        /**
        * @beta
        */
        static createWriter(): IWriter
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Shell`.

* @module LensStudio:Shell
*/
declare module "LensStudio:Shell" {
    export function openUrl(baseUrl: string, queryData: any): boolean
    
    export function showItemInFolder(path: Editor.Path): void
    
}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Subprocess` and add `subprocess` in your plugin's `module.json`.

* @module LensStudio:Subprocess

* @example
* ```js
* // module.json
* {
*     "main": "main.js",
*     "permissions": ["subprocess"]
* }
* ```

* ```js
* // main.js

* import { CoreService } from 'LensStudio:CoreService';
* import * as sb from 'LensStudio:Subprocess';

* ////////////////////////////////////////////////////////////////////////////////////////////////////
* // Helpers that print out some passed in text with some prefix 
* // that will be included with every print out.
* ////////////////////////////////////////////////////////////////////////////////////////////////////

* function createStartedCallback(text) {
*     return function () {
*         console.log('Process: ' + text + ' started');
*     };
* }

* function createStateChangedCallback(text) {
*     return function (state) {
*         console.log('Process: ' + text + ' state changed to: ' + state);
*     };
* }

* function createErrorCallback(text) {
*     return function (errorType) {
*         console.log('Process: ' + text + ' encountered process error of type: ' + errorType);
*     };
* }

* function createExitCallback(text) {
*     return function (exitCode) {
*         console.log('Process: ' + text + ' exited with code ' + exitCode);
*     };
* }

* function createStdOutCallback(text) {
*     return function (data) {
*         console.log('Process: ' + text + ' stdout: ' + data);
*     };
* }

* function createStdErrCallback(text) {
*     return function (data) {
*         console.log('Process: ' + text + ' stderr: ' + data);
*     }   
* }

* ////////////////////////////////////////////////////////////////////////////////////////////////////
* // Core Plugin that gets Python3 Version and Git Status on this plugin's folder. 
* ////////////////////////////////////////////////////////////////////////////////////////////////////
* export class ProcessTest extends CoreService {
*     static descriptor() {
*         return {
*             id: 'snap.test.SubprocessExample',
*             interfaces: CoreService. descriptor().interfaces,
*             name: 'Subprocess Example',
*             description: 'Run some sync and async subprocess.',
*             dependencies: []
*         };
*     }

*     constructor(pluginSystem) {
*         super(pluginSystem);
*     }

*     _subprocessPythonVersion() {
*         // Store subprocess in `this` so we can kill it when the plugin closes
*         this.pythonVersionSubprocess = sb.Subprocess.create('python3', ['--version'], {});
*         
*         // Hook into subprocess
*         const myCommand = this.pythonVersionSubprocess.command;
*         this.connections.push(this.pythonVersionSubprocess.started.connect(createStartedCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.stateChanged.connect(createStateChangedCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.errored.connect(createErrorCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.exited.connect(createExitCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.stdout.connect(createStdOutCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.stderr.connect(createStdErrCallback(myCommand)));

*         // Start the process
*         this.pythonVersionSubprocess.start();

*         // Write to stdin
*         for (let i = 0; i < 5; i++) {
*             this.pythonVersionSubprocess.stdin.writeString('Hello, world: ' + i + '\n');
*             sb.spawnSync('sleep', ['1'], {});
*         }
*     }

*     _subprocessSyncGitStatus() {
*         const pluginFolder = import.meta.resolve(".");
*         const options = {
*             cwd: new Editor.Path(pluginFolder)
*         }

*         const result = sb.spawnSync('git', ['status'], options);

*         console.log('success: ' + result.success);
*         console.log('stdout: ' + result.stdout);
*         console.log('stderr: ' + result.stderr);
*         console.log('exitCode: ' + result.exitCode);
*     }

*     start() {
*         this.connections = [];

*         console.log("Start: subprocess for Git Status ------------------------------");
*         this._subprocessSyncGitStatus();
*         console.log("Done: subprocess for Git Status -------------------------------");
*         
*         console.log("Start: subprocess for Python3 Version -------------------------");
*         this._subprocessPythonVersion();
*     }

*     stop() {
*         // Need to kill the asynchronus process we started in `subprocessPythonVersion`.
*         // For example when the app closes, or user disables the plugin.
*         this.pythonVersionSubprocess.kill();
*         console.log("Done: subprocess for Python3 Version --------------------------");
*     }
* }
* ```
*/
declare module "LensStudio:Subprocess" {
    /**
    * the options parameter can take `cwd` and `timeout`, meaning the current working directory to launch the program in, as well as the milliseconds to wait for a synchronously spawned subprocess to finish. By default, `cwd` is set to the current directory of the Lens Studio application, and timeout is set to 30000.
    */
    export function spawn(command: string, args: string[], options: SpawnOptions): Subprocess
    
    /**
    * the options parameter can take `cwd` and `timeout`, meaning the current working directory to launch the program in, as well as the milliseconds to wait for a synchronously spawned subprocess to finish. By default, `cwd` is set to the current directory of the Lens Studio application, and timeout is set to 30000.
    */
    export function spawnSync(command: string, args: string[], options: SpawnOptions): SpawnSyncResult
    
}

declare module "LensStudio:Subprocess" {
    /**
    * The exit status of a {@link "LensStudio:Subprocess".spawn} or {@link "LensStudio:Subprocess".spawnSync}. 
    */
    enum ExitStatus {
        NormalExit,
        CrashExit
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * The process error of a {@link "LensStudio:Subprocess".spawn} or {@link "LensStudio:Subprocess".spawnSync}. 
    */
    enum ProcessError {
        FailedToStart,
        Crashed,
        Timedout,
        ReadError,
        WriteError,
        UnknownError
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * The process state of a {@link "LensStudio:Subprocess".spawn} or {@link "LensStudio:Subprocess".spawnSync}. 
    */
    enum ProcessState {
        Idle,
        Starting,
        Running
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * The options of {@link "LensStudio:Subprocess".spawn} or {@link "LensStudio:Subprocess".spawnSync}.  `env`, can be specified as a `{PATH: myPath, PWD: myPwd}` or a JS object. The PATH and PWD fields will override the default value in your environment has when the subprocess is spawned.   You can access the default environment variables from {@link "LensStudio:App"},  where its a constant value that you can retrieve just like `.version`, using `.env`.
    */
    class SpawnOptions {
        
        /** @hidden */
        protected constructor()
        
        cwd: Editor.Path
        
        env: any
        
        timeout: number
        
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * The result of {@link "LensStudio:Subprocess".spawnSync}. 
    */
    class SpawnSyncResult {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        exitCode: number
        
        /**
        * @readonly
        */
        stderr: Editor.Buffer
        
        /**
        * @readonly
        */
        stdout: Editor.Buffer
        
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * Class which allows you to trigger a subproccess outside of Lens Studio (e.g. a command line command).
    */
    class Subprocess extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Kills a subprocess.
        */
        kill(): void
        
        /**
        * Starts a subprocess.
        */
        start(): void
        
        /**
        * The command for the subprocess.
        
        * @readonly
        */
        command: string
        
        /**
        * A handle for getting callback when a subprocess' state has errored.
        
        * @readonly
        */
        onError: signal1<number, void>
        
        /**
        * A handle for getting callback when a subprocess' state has exited.
        
        * Callback will receive two arguments in order:
        * Exit code (usually 0 means success)
        * Exit status (0 on normal exit, 1 on crash)
        
        
        * @readonly
        */
        onExit: signal2<number, number, void>
        
        /**
        * A handle for getting callback when a subprocess is started
        
        * @readonly
        */
        onStart: signal0<void>
        
        /**
        * A handle for getting callback when a subprocess' state has changed.
        
        * Callback will receive a number describing a state. 
        
        * Possible states:
        * Not running  0
        * Starting  1
        * Running  2
        
        
        * @readonly
        */
        onStateChange: signal1<number, void>
        
        /**
        * A handle for getting callback when a subprocess' state has received stderr.
        
        * @readonly
        */
        stderr: signal1<Editor.Buffer, void>
        
        /**
        * A handle for getting callback when a subprocess' state has received stdin.
        
        * @readonly
        */
        stdin: Writable
        
        /**
        * A handle for getting callback when a subprocess' state has received stdout.
        
        * @readonly
        */
        stdout: signal1<Editor.Buffer, void>
        
        /**
        * Create a subprocess.
        */
        static create(command: string, args: string[], options: SpawnOptions): Subprocess
        
    }

}

declare module "LensStudio:Subprocess" {
    class Writable extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        write(data: (Uint8Array|string)): number
        
    }

}

/**
* @module LensStudio:SysInfo
*/
declare module "LensStudio:SysInfo" {
    let productType: string
    
}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Ui`.

* @module LensStudio:Ui
*/
declare module "LensStudio:Ui" {
    export function getUrlString(displayText: string, url: string): string
    
}

declare module "LensStudio:Ui" {
    class AbstractButton extends Widget {
        
        /** @hidden */
        protected constructor()
        
        setIcon(icon: Editor.Icon): void
        
        setIconSize(w: number, h: number): void
        
        checkable: boolean
        
        checked: boolean
        
        text: string
        
    }

}

declare module "LensStudio:Ui" {
    class Action extends ScriptObject {
        constructor(parent: Widget)
        
        blockSignals(blocked: boolean): void
        
        checkable: boolean
        
        checked: boolean
        
        icon: Editor.Icon
        
        iconVisibleInMenu: boolean
        
        /**
        * @readonly
        */
        onToggle: signal1<boolean, void>
        
        /**
        * @readonly
        */
        onTrigger: signal1<boolean, void>
        
        text: string
        
        toolTip: string
        
    }

}

declare module "LensStudio:Ui" {
    enum Alignment {
        Default,
        AlignLeading,
        AlignLeft,
        AlignRight,
        AlignTrailing,
        AlignHCenter,
        AlignJustify,
        AlignAbsolute,
        AlignHorizontal_Mask,
        AlignTop,
        AlignBottom,
        AlignVCenter,
        AlignCenter,
        AlignBaseline,
        AlignVertical_Mask
    }

}

declare module "LensStudio:Ui" {
    enum ArrowPosition {
        Top,
        Bottom
    }

}

declare module "LensStudio:Ui" {
    enum AspectRatioMode {
        IgnoreAspectRatio,
        KeepAspectRatio,
        KeepAspectRatioByExpanding
    }

}

declare module "LensStudio:Ui" {
    enum BackgroundRole {
        WindowBackground,
        PanelBackground,
        ComponentBackground,
        PopupBackground,
        ButtonBackground,
        InputBackground,
        CtaBackground
    }

}

declare module "LensStudio:Ui" {
    class BoxLayout extends Layout {
        constructor()
        
        addLayout(layout: Layout): void
        
        addStretch(stretch: number): void
        
        addWidgetWithStretch(widget: Widget, stretch: number, alignment: Alignment): void
        
        setDirection(direction: Direction): void
        
    }

}

declare module "LensStudio:Ui" {
    class CalloutFrame extends Widget {
        constructor(parent: Widget)
        
        setBackgroundColor(color: Color): void
        
        setBackgroundRole(role: BackgroundRole, group: ColorGroup): void
        
        setForegroundColor(color: Color): void
        
        setForegroundRole(role: ForegroundRole, group: ColorGroup): void
        
        lineWidth: number
        
    }

}

declare module "LensStudio:Ui" {
    class CheckBox extends AbstractButton {
        constructor(parent: Widget)
        
        checkState: CheckState
        
        /**
        * @readonly
        */
        onToggle: signal1<boolean, void>
        
    }

}

declare module "LensStudio:Ui" {
    enum CheckState {
        Unchecked,
        PartiallyChecked,
        Checked
    }

}

declare module "LensStudio:Ui" {
    enum ClearLayoutBehavior {
        DeleteClearedWidgets,
        KeepClearedWidgets
    }

}

declare module "LensStudio:Ui" {
    class ClickableLabel extends Label {
        constructor(parent: Widget)
        
        /**
        * @readonly
        */
        onClick: signal0<void>
        
    }

}

declare module "LensStudio:Ui" {
    class CloseEvent extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        accept(): void
        
        ignore(): void
        
    }

}

declare module "LensStudio:Ui" {
    class CollapsiblePanel extends Widget {
        constructor(icon: Editor.Icon, text: string, parent: Widget)
        
        /** @internal */
        static create(widget: CollapsiblePanel): CollapsiblePanel
        
        clearContent(): void
        
        expand(value: boolean): void
        
        setContentWidget(widget: Widget): void
        
        customBackgroundRole: BackgroundRole
        
        expandable: boolean
        
        /**
        * @readonly
        */
        onExpand: signal1<boolean, void>
        
        overrideBackgroundRole: boolean
        
    }

}

declare module "LensStudio:Ui" {
    class Color {
        constructor()
        
        alpha: number
        
        blue: number
        
        green: number
        
        red: number
        
    }

}

declare module "LensStudio:Ui" {
    class ColorButton extends PushButton {
        constructor(parent: Widget)
        
        setAutoUpdateToolTip(autoUpdateToolTip: boolean): void
        
        alphaEnabled: boolean
        
        /**
        * @readonly
        */
        colorAccepted: signal1<import('LensStudio:Ui').Color, void>
        
        /**
        * @readonly
        */
        colorRejected: signal1<import('LensStudio:Ui').Color, void>
        
        /**
        * @readonly
        */
        colorValueChanged: signal1<import('LensStudio:Ui').Color, void>
        
        currentColor: Color
        
        /**
        * @readonly
        */
        dialogClosed: signal0<void>
        
        /**
        * @readonly
        */
        dialogCreated: signal1<import('LensStudio:Ui').Color, void>
        
        /**
        * @readonly
        */
        isDialogActive: boolean
        
        /**
        * @readonly
        */
        lastAcceptedColor: Color
        
    }

}

declare module "LensStudio:Ui" {
    enum ColorGroup {
        Base,
        Normal,
        Hover,
        Pressed,
        Disabled,
        ReadOnly,
        DisabledInHierarchy
    }

}

declare module "LensStudio:Ui" {
    enum ColorRole {
        WindowText,
        Button,
        Light,
        Midlight,
        Dark,
        Mid,
        Text,
        BrightText,
        ButtonText,
        Base,
        Window,
        Shadow,
        Highlight,
        HighlightedText,
        Link,
        LinkVisited,
        AlternateBase,
        NoRole,
        ToolTipBase,
        ToolTipText,
        PlaceholderText
    }

}

declare module "LensStudio:Ui" {
    class ComboBox extends Widget {
        constructor(parent: Widget)
        
        addIconItem(icon: Editor.Icon, text: string): void
        
        addItem(text: string): void
        
        clear(): void
        
        setItemIcon(index: number, icon: Editor.Icon): void
        
        currentText: string
        
        /**
        * @readonly
        */
        onCurrentTextChange: signal1<string, void>
        
    }

}

declare module "LensStudio:Ui" {
    enum ContextMenuPolicy {
        NoContextMenu,
        DefaultContextMenu,
        ActionsContextMenu,
        CustomContextMenu,
        PreventContextMenu
    }

}

declare module "LensStudio:Ui" {
    class Dialog extends Widget {
        constructor(parent: Widget)
        
        accept(): void
        
        done(code: number): void
        
        exec(): number
        
        open(): void
        
        reject(): void
        
        setModal(modal: boolean): void
        
        /**
        * @readonly
        */
        onFinish: signal1<number, void>
        
    }

}

declare module "LensStudio:Ui" {
    namespace Dialog {
        enum Code {
            Rejected,
            Accepted
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Dialogs {
        enum Options {
            Usual,
            DirectoriesOnly
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Dialogs {
        class Params {
            
            /** @hidden */
            protected constructor()
            
            caption: string
            
            filter: string
            
            options: Dialogs.Options
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    enum Direction {
        LeftToRight,
        RightToLeft,
        TopToBottom,
        BottomToTop
    }

}

declare module "LensStudio:Ui" {
    enum DockState {
        Attached,
        Detached
    }

}

declare module "LensStudio:Ui" {
    class DoubleSpinBox extends Widget {
        constructor(parent: Widget)
        
        setRange(min: number, max: number): void
        
        /**
        * @readonly
        */
        onValueChange: signal1<number, void>
        
        singleStep: number
        
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    class EditorsManager extends IEditorsManager {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:Ui" {
    enum FontRole {
        Default,
        First,
        DefaultUnderlined,
        DefaultBold,
        DefaultItalic,
        Small,
        Monospace,
        SmallTitle,
        Title,
        TitleBold,
        MediumTitle,
        MediumTitleBold,
        LargeTitle,
        LargeTitleBold
    }

}

declare module "LensStudio:Ui" {
    enum ForegroundRole {
        Content,
        ActiveContent,
        PlaceholderContent,
        Link,
        Highlight,
        Focus,
        DividerIn,
        DividerOut,
        InputOutline,
        ButtonOutline,
        RegionSelection,
        ColorRed,
        ColorOrange,
        ColorYellow,
        ColorGreen
    }

}

declare module "LensStudio:Ui" {
    class GridLayout extends Layout {
        constructor()
        
        addLayout(layout: Layout, row: number, column: number, alignment: Alignment): void
        
        addWidgetAt(widget: Widget, row: number, column: number, alignment: Alignment): void
        
        addWidgetWithSpan(widget: Widget, fromRow: number, fromColumn: number, rowSpan: number, columnSpan: number, alignment: Alignment): void
        
        getColumnMinimumWidth(column: number): number
        
        getColumnStretch(column: number): number
        
        getRowMinimumHeight(row: number): number
        
        getRowStretch(row: number): number
        
        setColumnMinimumWidth(column: number, minSize: number): void
        
        setColumnStretch(column: number, stretch: number): void
        
        setRowMinimumHeight(row: number, minSize: number): void
        
        setRowStretch(row: number, stretch: number): void
        
    }

}

declare module "LensStudio:Ui" {
    class Gui extends IGui {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:Ui" {
    enum IconMode {
        MonoChrome,
        Regular
    }

}

declare module "LensStudio:Ui" {
    class IDialogs extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        selectFileToOpen(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path
        
        selectFileToSave(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path
        
        selectFilesToOpen(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path[]
        
        /**
        * Returns selected path, or an empty path if the dialog was cancelled.
        
        */
        selectFolderToOpen(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path
        
        selectFolderToSave(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path
        
    }

}

declare module "LensStudio:Ui" {
    class IEditorsManager extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        openEditors(entity: Editor.Model.Entity, editorPluginIds?: any): void
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare module "LensStudio:Ui" {
    class IGui extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        createDialog(): Dialog
        
        createWidget(): Widget
        
        /**
        * @readonly
        */
        dialogs: IDialogs
        
        /**
        * @readonly
        
        * @beta
        */
        workspaces: IWorkspaceManager
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare module "LensStudio:Ui" {
    class ImageView extends Widget {
        constructor(parent: Widget)
        
        /**
        * @readonly
        */
        onClick: signal0<void>
        
        /**
        * @readonly
        */
        onHover: signal1<boolean, void>
        
        pixmap: Pixmap
        
        radius: number
        
        responseHover: boolean
        
        scaledContents: boolean
        
    }

}

declare module "LensStudio:Ui" {
    class IWorkspaceManager extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        create(descriptor: Workspaces.Descriptor): Workspaces.Workspace
        
        isRegistered(descriptor: Workspaces.Descriptor): boolean
        
        readDescriptor(presetDirPath: Editor.Path): Workspaces.Descriptor | undefined
        
        register(descriptor: Workspaces.Descriptor): Workspaces.PresetHandle
        
        unregister(handle: Workspaces.PresetHandle): void
        
        /**
        * @readonly
        */
        all: Workspaces.Workspace[]
        
        /**
        * @readonly
        */
        onAboutToBeActivated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * @readonly
        */
        onAboutToBeAdded: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * @readonly
        */
        onAboutToBeDeactivated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * @readonly
        */
        onAboutToBeRemoved: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * @readonly
        */
        onActivated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * @readonly
        */
        onAdded: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * @readonly
        */
        onCreated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * @readonly
        */
        onDeactivated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * @readonly
        */
        onRemoved: signal1<import('LensStudio:Ui').Workspaces.Metadata, void>
        
    }

}

declare module "LensStudio:Ui" {
    class Label extends Widget {
        constructor(parent: Widget)
        
        /**
        * @readonly
        */
        onLinkActivate: signal1<string, void>
        
        openExternalLinks: boolean
        
        text: string
        
        wordWrap: boolean
        
    }

}

declare module "LensStudio:Ui" {
    class Layout extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        addWidget(widget: Widget): void
        
        clear(behavior: ClearLayoutBehavior): void
        
        deleteLater(): void
        
        setContentsMargins(left: number, top: number, right: number, bottom: number): void
        
        setLayoutAlignment(layout: Layout, alignment: Alignment): boolean
        
        setWidgetAlignment(widget: Widget, alignment: Alignment): boolean
        
        enabled: boolean
        
        /**
        * @readonly
        */
        isNull: boolean
        
        spacing: number
        
    }

}

declare module "LensStudio:Ui" {
    class LineEdit extends Widget {
        constructor(parent: Widget)
        
        cursorPosition: number
        
        icon: Editor.Icon
        
        /**
        * @readonly
        */
        onTextChange: signal1<string, void>
        
        placeholderText: string
        
        text: string
        
    }

}

declare module "LensStudio:Ui" {
    class Menu extends Widget {
        constructor(parent: Widget)
        
        addAction(action: Action): void
        
        addMenu(caption: string): Menu
        
        addSeparator(): void
        
        popup(target: Widget): void
        
    }

}

declare module "LensStudio:Ui" {
    class MessageBox {
        
        /** @hidden */
        protected constructor()
        
        static critical(title: string, text: string, buttons: MessageBox.StandardButtons, defaultButton: MessageBox.StandardButton): MessageBox.StandardButton
        
        static information(title: string, text: string, buttons: MessageBox.StandardButtons, defaultButton: MessageBox.StandardButton): MessageBox.StandardButton
        
        static question(title: string, text: string, buttons: MessageBox.StandardButtons, defaultButton: MessageBox.StandardButton): MessageBox.StandardButton
        
        static warning(title: string, text: string, buttons: MessageBox.StandardButtons, defaultButton: MessageBox.StandardButton): MessageBox.StandardButton
        
    }

}

declare module "LensStudio:Ui" {
    namespace MessageBox {
        enum Icon {
            NoIcon,
            Information,
            Warning,
            Critical,
            Question
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace MessageBox {
        enum StandardButton {
            NoButton,
            Ok,
            Save,
            SaveAll,
            Open,
            Yes,
            YesToAll,
            No,
            NoToAll,
            Abort,
            Retry,
            Ignore,
            Close,
            Cancel,
            Discard,
            Help,
            Apply,
            Reset,
            RestoreDefaults
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace MessageBox {
        /**
        * @beta
        */
        class StandardButtons {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    class Movie extends ScriptObject {
        constructor(filename: Editor.Path)
        
        resize(width: number, height: number): void
        
        height: number
        
        speed: number
        
        width: number
        
    }

}

declare module "LensStudio:Ui" {
    class MovieView extends Widget {
        constructor(parent: Widget)
        
        animated: boolean
        
        movie: Movie
        
        /**
        * @readonly
        */
        onClick: signal0<void>
        
        /**
        * @readonly
        */
        onHover: signal1<boolean, void>
        
        responseHover: boolean
        
        scaledContents: boolean
        
    }

}

declare module "LensStudio:Ui" {
    enum Orientation {
        Horizontal,
        Vertical
    }

}

declare module "LensStudio:Ui" {
    class OverflowToolBar extends Widget {
        constructor(parent: Widget)
        
        addStretch(section: Section, stretch: number): void
        
        addWidget(widget: Widget, section: Section, action?: Action): void
        
    }

}

declare module "LensStudio:Ui" {
    class Pixmap extends ScriptObject {
        constructor(filename: Editor.Path)
        
        crop(rect: Rect): void
        
        load(filename: Editor.Path): void
        
        resize(width: number, height: number): void
        
        save(filename: Editor.Path): void
        
        aspectRatioMode: AspectRatioMode
        
        height: number
        
        transformationMode: TransformationMode
        
        width: number
        
    }

}

declare module "LensStudio:Ui" {
    class PopupWithArrow extends Widget {
        constructor(parent: Widget, arrowPosition: ArrowPosition)
        
        /** @internal */
        static create(widget: PopupWithArrow): PopupWithArrow
        
        close(): void
        
        popup(target: Widget): void
        
        setMainWidget(widget: Widget): void
        
    }

}

declare module "LensStudio:Ui" {
    class ProgressBar extends Widget {
        constructor(parent: Widget)
        
        setPrimaryColor(color: Color): void
        
        setRange(minimum: number, maximum: number): void
        
        setSecondaryColor(color: Color): void
        
        maximum: number
        
        minimum: number
        
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    class ProgressIndicator extends Widget {
        constructor(parent: Widget)
        
        start(): void
        
        stop(): void
        
    }

}

declare module "LensStudio:Ui" {
    namespace ProjectSettings {
        class Error {
            constructor(description: string)
            
            description: string
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace ProjectSettings {
        class NoIssue {
            constructor()
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace ProjectSettings {
        class Warning {
            constructor(description: string)
            
            description: string
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    class PushButton extends AbstractButton {
        constructor(parent: Widget)
        
        setIconMode(iconMode: IconMode): void
        
        setIconWithMode(icon: Editor.Icon, iconMode: IconMode): void
        
        /**
        * @readonly
        */
        onClick: signal0<void>
        
        primary: boolean
        
    }

}

declare module "LensStudio:Ui" {
    class RadioButton extends AbstractButton {
        constructor(parent: Widget)
        
        /**
        * @readonly
        */
        onClick: signal0<void>
        
    }

}

declare module "LensStudio:Ui" {
    class RadioButtonGroup extends Widget {
        constructor(parent: Widget)
        
        addButton(button: AbstractButton, id: number): void
        
        clearSelection(): void
        
        currentIndex: number
        
        /**
        * @readonly
        */
        currentItem: AbstractButton
        
        spacing: number
        
    }

}

declare module "LensStudio:Ui" {
    class Rect {
        constructor(x: number, y: number, width: number, height: number)
        
    }

}

declare module "LensStudio:Ui" {
    class SearchLineEdit extends LineEdit {
        constructor(parent: Widget)
        
    }

}

declare module "LensStudio:Ui" {
    enum Section {
        Left,
        Center,
        Right
    }

}

declare module "LensStudio:Ui" {
    class Separator extends Widget {
        constructor(orientation: Orientation, shadow: Shadow, parent: Widget)
        
        /** @internal */
        static create(widget: Separator): Separator
        
    }

}

declare module "LensStudio:Ui" {
    enum Shadow {
        Plain,
        Raised,
        Sunken
    }

}

declare module "LensStudio:Ui" {
    class Size {
        constructor(width: number, height: number)
        
        height: number
        
        width: number
        
    }

}

declare module "LensStudio:Ui" {
    namespace SizePolicy {
        enum Policy {
            Fixed,
            Minimum,
            MinimumExpanding,
            Maximum,
            Preferred,
            Expanding,
            Ignored
        }
    
    }

}

declare module "LensStudio:Ui" {
    class Sizes {
        
        /** @hidden */
        protected constructor()
        
        static ButtonDelegateSide: number
        
        static ButtonHeight: number
        
        static ButtonRadius: number
        
        static CheckBoxDrawedDiameter: number
        
        static CheckBoxOutlineWidth: number
        
        static CheckboxFocusPadding: number
        
        static CheckboxPadding: number
        
        static CheckboxRadius: number
        
        static DialogContentMargin: number
        
        static DoublePadding: number
        
        static DragIconSizeHeight: number
        
        static DragIconSizeWidth: number
        
        static ExtentIconSide: number
        
        static HalfPadding: number
        
        static IconSide: number
        
        static InputHeight: number
        
        static InputRadius: number
        
        static MenuItemHeight: number
        
        static MessageBoxIconSide: number
        
        static Padding: number
        
        static PaddingLarge: number
        
        static ProgressBarHeight: number
        
        static RoundedPixmapRadius: number
        
        static SeparatorContentsMargin: number
        
        static SeparatorLineWidth: number
        
        static SizeGripSizeHeight: number
        
        static SizeGripSizeWidth: number
        
        static Spacing: number
        
        static SpinboxButtonHeight: number
        
        static SpinboxButtonWidth: number
        
        static SpinboxDefaultWidth: number
        
        static SplitterHandleWidth: number
        
        static TextEditHeight: number
        
        static ToolButtonPadding: number
        
        static ViewElidingGradientWidth: number
        
        static ViewIndentation: number
        
        static ViewSectionHeight: number
        
    }

}

declare module "LensStudio:Ui" {
    class Slider extends Widget {
        constructor(parent: Widget)
        
        setRange(min: number, max: number): void
        
        /**
        * @readonly
        */
        onValueChange: signal1<number, void>
        
        singleStep: number
        
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    class SpinBox extends Widget {
        constructor(parent: Widget)
        
        setRange(min: number, max: number): void
        
        /**
        * @readonly
        */
        onValueChange: signal1<number, void>
        
        step: number
        
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    class StackedLayout extends Layout {
        constructor()
        
        addWidgetAt(widget: Widget, index: number): number
        
        currentIndex: number
        
        /**
        * @readonly
        */
        onCurrentChanged: signal1<number, void>
        
        stackingMode: StackingMode
        
    }

}

declare module "LensStudio:Ui" {
    class StackedWidget extends Widget {
        constructor(parent: Widget)
        
        addWidget(widget: Widget): number
        
        currentIndex: number
        
        currentWidget: Widget
        
    }

}

declare module "LensStudio:Ui" {
    enum StackingMode {
        StackOne,
        StackAll
    }

}

declare module "LensStudio:Ui" {
    class StatusIndicator extends Widget {
        constructor(text: string, parent: Widget)
        
        /** @internal */
        static create(widget: StatusIndicator): StatusIndicator
        
        start(): void
        
        stop(): void
        
        text: string
        
    }

}

declare module "LensStudio:Ui" {
    class TabBar extends Widget {
        constructor(parent: Widget)
        
        addTab(text: string): void
        
        setTabIcon(index: number, icon: Editor.Icon): void
        
        currentIndex: number
        
        /**
        * @readonly
        */
        onCurrentChange: signal1<number, void>
        
    }

}

declare module "LensStudio:Ui" {
    class TextCursor {
        
        /** @hidden */
        protected constructor()
        
        movePosition(operation: TextCursor.MoveOperation, mode: TextCursor.MoveMode): boolean
        
    }

}

declare module "LensStudio:Ui" {
    namespace TextCursor {
        enum MoveMode {
            MoveAnchor,
            KeepAnchor
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace TextCursor {
        enum MoveOperation {
            NoMove,
            Start,
            Up,
            StartOfLine,
            StartOfBlock,
            StartOfWord,
            PreviousBlock,
            PreviousCharacter,
            PreviousWord,
            Left,
            WordLeft,
            End,
            Down,
            EndOfLine,
            EndOfBlock,
            NextBlock,
            NextCharacter,
            NextWord,
            Right,
            WordRight,
            NextCell,
            PreviousCell,
            NextRow,
            PreviousRow
        }
    
    }

}

declare module "LensStudio:Ui" {
    class TextEdit extends Widget {
        constructor(parent: Widget)
        
        acceptRichText: boolean
        
        /**
        * @readonly
        */
        onTextChange: signal0<void>
        
        placeholderText: string
        
        plainText: string
        
        readOnly: boolean
        
        textCursor: TextCursor
        
    }

}

declare module "LensStudio:Ui" {
    class ToolbarConfig {
        constructor()
        
        caption: string
        
        icon: Editor.Icon
        
        settings: ToolbarSettings
        
    }

}

declare module "LensStudio:Ui" {
    enum ToolbarPosition {
        Right,
        Left
    }

}

declare module "LensStudio:Ui" {
    class ToolbarSettings {
        constructor()
        
        position: ToolbarPosition
        
        primary: boolean
        
        priority: number
        
        showText: boolean
        
    }

}

declare module "LensStudio:Ui" {
    class ToolButton extends AbstractButton {
        constructor(parent: Widget)
        
        setDefaultAction(action: Action): void
        
        /**
        * @readonly
        */
        onClick: signal0<void>
        
    }

}

declare module "LensStudio:Ui" {
    enum TransformationMode {
        FastTransformation,
        SmoothTransformation
    }

}

declare module "LensStudio:Ui" {
    class VerticalScrollArea extends Widget {
        constructor(parent: Widget)
        
        setWidget(widget: Widget): void
        
        /**
        * @readonly
        */
        maximum: number
        
        /**
        * @readonly
        */
        minimum: number
        
        /**
        * @readonly
        */
        onValueChange: signal1<number, void>
        
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    class VideoView extends Widget {
        constructor(parent: Widget)
        
        pause(): void
        
        play(): void
        
        setSource(path: Editor.Path): void
        
        stop(): void
        
        /**
        * @readonly
        */
        duration: number
        
        loopCount: number
        
        muted: boolean
        
        /**
        * @readonly
        */
        onClick: signal0<void>
        
        /**
        * @readonly
        */
        onHover: signal1<boolean, void>
        
        /**
        * @readonly
        */
        onPositionChanged: signal1<number, void>
        
        /**
        * @readonly
        */
        onStateChanged: signal1<any, void>
        
        position: number
        
        radius: number
        
        responseHover: boolean
        
        /**
        * @readonly
        */
        state: any
        
        volume: number
        
    }

}

declare module "LensStudio:Ui" {
    class WebEngineView extends Widget {
        constructor(parent: Widget)
        
        load(url: string): void
        
        /**
        * @readonly
        */
        onLoadFinished: signal1<boolean, void>
        
        /**
        * @readonly
        */
        onLoadStarted: signal0<void>
        
    }

}

declare module "LensStudio:Ui" {
    class Widget extends ScriptObject {
        constructor(parent: Widget)
        
        activateWindow(): void
        
        adjustSize(): void
        
        blockSignals(blocked: boolean): void
        
        close(): void
        
        deleteLater(): void
        
        grab(): Pixmap
        
        move(ax: number, ay: number): void
        
        raise(): void
        
        resize(width: number, height: number): void
        
        setContentsMargins(left: number, top: number, right: number, bottom: number): void
        
        setFixedHeight(height: number): void
        
        setFixedWidth(width: number): void
        
        setMaximumHeight(height: number): void
        
        setMaximumWidth(width: number): void
        
        setMinimumHeight(height: number): void
        
        setMinimumWidth(width: number): void
        
        setSizePolicy(horizontal: SizePolicy.Policy, vertical: SizePolicy.Policy): void
        
        setUndoable(undoable: boolean): void
        
        setUndoableRecursive(undoable: boolean): void
        
        show(): void
        
        autoFillBackground: boolean
        
        backgroundRole: ColorRole
        
        contextMenuPolicy: ContextMenuPolicy
        
        /**
        * @readonly
        */
        devicePixelRatio: number
        
        enabled: boolean
        
        fontRole: FontRole
        
        foregroundRole: ColorRole
        
        /**
        * @readonly
        */
        height: number
        
        hidden: boolean
        
        /**
        * @readonly
        */
        isNull: boolean
        
        layout: Layout
        
        /**
        * @readonly
        */
        onClose: signal1<import('LensStudio:Ui').CloseEvent, void>
        
        /**
        * @readonly
        */
        onHide: signal0<void>
        
        /**
        * @readonly
        */
        onResize: signal2<number, number, void>
        
        /**
        * @readonly
        */
        onShow: signal0<void>
        
        toolTip: string
        
        visible: boolean
        
        /**
        * @readonly
        */
        width: number
        
        windowTitle: string
        
    }

}

declare module "LensStudio:Ui" {
    namespace Workspaces {
        /**
        * @beta
        */
        class Descriptor {
            /**
            * @beta
            */
            constructor()
            
            /**
            * @beta
            */
            layoutReader: import('LensStudio:Serialization').IReader
            
            /**
            * @beta
            */
            metadata: Workspaces.Metadata
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Workspaces {
        /**
        * @beta
        */
        class Metadata {
            /**
            * @beta
            */
            constructor()
            
            /**
            * @beta
            */
            icon: Editor.Icon
            
            /**
            * @beta
            */
            name: string
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Workspaces {
        /**
        * @beta
        */
        class PresetHandle {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Workspaces {
        /**
        * @beta
        */
        class Workspace extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            
            * @beta
            */
            dockManager: Editor.Dock.IDockManager
            
            /**
            * @readonly
            
            * @beta
            */
            metadata: Workspaces.Metadata
            
        }
    
    }

}

/**
* @module LensStudio:UriHandlerPlugin
*/
declare module "LensStudio:UriHandlerPlugin" {
}

declare module "LensStudio:UriHandlerPlugin" {
    class Descriptor extends BaseDescriptor {
        constructor()
        
        canHandle: (arg1: string) => any
        
    }

}

declare module "LensStudio:UriHandlerPlugin" {
    class UriHandlerPlugin extends Editor.IPlugin {
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        handle(uri: string): boolean
        
        /**
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* @module LensStudio:Uuid
*/
declare module "LensStudio:Uuid" {
    export function fromString(uuid: string): Uuid
    
    let invalid: import('LensStudio:Uuid').Uuid
    
}

declare module "LensStudio:Uuid" {
    class Uuid {
        
        /** @hidden */
        protected constructor()
        
        isValid(): boolean
        
        toString(): string
        
    }

}

/**
* @module LensStudio:WebSocket
*/
declare module "LensStudio:WebSocket" {
}

declare module "LensStudio:WebSocket" {
    import {BaseSocket} from "LensStudio:Network" 
    
    class WebSocket extends BaseSocket {
        
        /** @hidden */
        protected constructor()
        
        connect(address: import('LensStudio:Network').Address): void
        
        send(data: (Uint8Array|string)): number
        
        static create(): WebSocket
        
    }

}

declare module "LensStudio:WebSocket" {
    import {BaseServer} from "LensStudio:Network" 
    
    class WebSocketServer extends BaseServer {
        
        /** @hidden */
        protected constructor()
        
        static create(): WebSocketServer
        
    }

}

declare class mat2 {
    constructor()
    
    add(mat: mat2): mat2
    
    determinant(): number
    
    div(mat: mat2): mat2
    
    equal(mat: mat2): boolean
    
    inverse(): mat2
    
    mult(mat: mat2): mat2
    
    multiplyScalar(scalar: number): mat2
    
    sub(mat: mat2): mat2
    
    toString(): string
    
    transpose(): mat2
    
    column0: vec2
    
    column1: vec2
    
    description: string
    
    static identity(): mat2
    
    static zero(): mat2
    
}

declare class mat3 {
    constructor()
    
    add(mat: mat3): mat3
    
    determinant(): number
    
    div(mat: mat3): mat3
    
    equal(mat: mat3): boolean
    
    inverse(): mat3
    
    mult(mat: mat3): mat3
    
    multiplyScalar(scalar: number): mat3
    
    sub(mat: mat3): mat3
    
    toString(): string
    
    transpose(): mat3
    
    column0: vec3
    
    column1: vec3
    
    column2: vec3
    
    description: string
    
    static identity(): mat3
    
    static makeFromRotation(rotation: quat): mat3
    
    static zero(): mat3
    
}

declare class mat4 {
    constructor()
    
    add(mat: mat4): mat4
    
    determinant(): number
    
    div(mat: mat4): mat4
    
    equal(mat: mat4): boolean
    
    extractEulerAngles(): vec3
    
    inverse(): mat4
    
    mult(mat: mat4): mat4
    
    multiplyDirection(direction: vec3): vec3
    
    multiplyPoint(point: vec3): vec3
    
    multiplyScalar(scalar: number): mat4
    
    multiplyVector(vector: vec4): vec4
    
    sub(mat: mat4): mat4
    
    toString(): string
    
    transpose(): mat4
    
    column0: vec4
    
    column1: vec4
    
    column2: vec4
    
    column3: vec4
    
    description: string
    
    static compMult(a: mat4, b: mat4): mat4
    
    static compose(translation: vec3, rotation: quat, scale: vec3): mat4
    
    static fromColumns(column0: vec4, column1: vec4, column2: vec4, column3: vec4): mat4
    
    static fromEulerAngles(angles: vec3): mat4
    
    static fromEulerX(angle: number): mat4
    
    static fromEulerY(angle: number): mat4
    
    static fromEulerZ(angle: number): mat4
    
    static fromRotation(rotation: quat): mat4
    
    static fromRows(row0: vec4, row1: vec4, row2: vec4, row3: vec4): mat4
    
    static fromScale(scale: vec3): mat4
    
    static fromTranslation(translation: vec3): mat4
    
    static identity(): mat4
    
    static lookAt(eye: vec3, center: vec3, up: vec3): mat4
    
    static makeBasis(x: vec3, y: vec3, z: vec3): mat4
    
    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): mat4
    
    static outerProduct(a: vec4, b: vec4): mat4
    
    static perspective(fov: number, aspect: number, near: number, far: number): mat4
    
    static zero(): mat4
    
}

declare class MathUtils {
    
    /** @hidden */
    protected constructor()
    
    static clamp(v: number, lo: number, hi: number): number
    
    static lerp(a: number, b: number, time: number): number
    
    static randomRange(lo: number, hi: number): number
    
    static remap(v: number, inMin: number, inMax: number, outMin: number, outMax: number): number
    
    static DegToRad: number
    
    static RadToDeg: number
    
}

declare class quat {
    constructor(w: number, x: number, y: number, z: number)
    
    dot(quat: quat): number
    
    equal(quat: quat): boolean
    
    getAngle(): number
    
    getAxis(): vec3
    
    invert(): quat
    
    multiply(quat: quat): quat
    
    multiplyVec3(vec3: vec3): vec3
    
    normalize(): void
    
    toEulerAngles(): vec3
    
    toString(): string
    
    w: number
    
    x: number
    
    y: number
    
    z: number
    
    static angleAxis(angle: number, axis: vec3): quat
    
    static angleBetween(a: quat, b: quat): number
    
    static fromEulerAngles(x: number, y: number, z: number): quat
    
    static fromEulerVec(eulerAngles: vec3): quat
    
    static fromRotationMat(rotationMat: mat3): quat
    
    static fromRotationMat4(rotationMat4: mat4): quat
    
    static lerp(a: quat, b: quat, time: number): quat
    
    static lookAt(forward: vec3, up: vec3): quat
    
    static quatIdentity(): quat
    
    static rotationFromTo(from: vec3, to: vec3): quat
    
    static slerp(a: quat, b: quat, time: number): quat
    
}

declare class ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    getTypeName(): string
    
    isOfType(type: string): boolean
    
    isSame(other: ScriptObject): boolean
    
}

/**
* Provides encrypted storage for each plugin module's sensitive data, like access tokens. It uses Keychain on macOS and Credentials Manager on Windows. The data can be stored and retrieved as string-to-string key value pairs via a global secureLocalStorage object. Data for each plugin module (module.json) is kept separate from all others. There is a 2KB limit on the string size because this is meant for small pieces of secure info rather than a generic container.

* @example
* ```js
* secureLocalStorage.setItem('myLoginPassword', 'myPassword');
* console.log("My stored password is: " + secureLocalStorage.getItem('myLoginPassword'));
* secureLocalStorage.removeItem('myLoginPassword');
* console.log("My stored password is: " + secureLocalStorage.getItem('myLoginPassword'));
* ```
*/
declare class SecureLocalStorage extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
    * Remove all values in the storage.
    */
    clear(): void
    
    /**
    * Get the value stored under `keyName`.
    */
    getItem(keyName: string): string | undefined
    
    /**
    * Get the length of the storage.
    */
    length(): number
    
    /**
    * Remove the stored value under `keyName`.
    */
    removeItem(keyName: string): void
    
    /**
    * Sets the value stored under `keyName`.
    */
    setItem(keyName: string, keyValue: string): void
    
}

declare class Task {
    
    /** @hidden */
    protected constructor()
    
}

declare namespace Task {
    class ITaskManager extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        whenAllCompleted(): Promise<void>
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Task {
    class TaskManager extends Task.ITaskManager {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare class TextDecoder extends ScriptObject {
    constructor(encoding?: string)
    
    decode(data: Uint8Array): string
    
    /**
    * @readonly
    */
    encoding: string
    
}

declare class TextEncoder extends ScriptObject {
    constructor()
    
    encode(value: string): Uint8Array
    
    encodeInto(value: string, result: Uint8Array): void
    
    /**
    * @readonly
    */
    encoding: string
    
}

/**
* A handle for a timer. You can create a timeout using {@link setTimeout}.
*/
declare class Timeout extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

declare class vec2 {
    constructor(x: number, y: number)
    
    add(vec: vec2): vec2
    
    angleTo(vec: vec2): number
    
    clampLength(length: number): vec2
    
    distance(vec: vec2): number
    
    distanceSquared(vec: vec2): number
    
    div(vec: vec2): vec2
    
    dot(vec: vec2): number
    
    equal(vec: vec2): boolean
    
    moveTowards(target: vec2, step: number): vec2
    
    mult(vec: vec2): vec2
    
    normalize(): vec2
    
    project(normal: vec2): vec2
    
    projectOnPlane(planeNormal: vec2): vec2
    
    reflect(planeNormal: vec2): vec2
    
    scale(vec: vec2): vec2
    
    sub(vec: vec2): vec2
    
    toString(): string
    
    uniformScale(scale: number): vec2
    
    g: number
    
    length: number
    
    lengthSquared: number
    
    r: number
    
    x: number
    
    y: number
    
    static down(): vec2
    
    static left(): vec2
    
    static lerp(a: vec2, b: vec2, time: number): vec2
    
    static max(a: vec2, b: vec2): vec2
    
    static min(a: vec2, b: vec2): vec2
    
    static one(): vec2
    
    static randomDirection(): vec2
    
    static right(): vec2
    
    static up(): vec2
    
    static zero(): vec2
    
}

declare class vec3 {
    constructor(x: number, y: number, z: number)
    
    add(vec: vec3): vec3
    
    angleTo(vec: vec3): number
    
    clampLength(length: number): vec3
    
    cross(vec: vec3): vec3
    
    distance(vec: vec3): number
    
    distanceSquared(vec: vec3): number
    
    div(vec: vec3): vec3
    
    dot(vec: vec3): number
    
    equal(vec: vec3): boolean
    
    moveTowards(target: vec3, step: number): vec3
    
    mult(vec: vec3): vec3
    
    normalize(): vec3
    
    project(normal: vec3): vec3
    
    projectOnPlane(planeNormal: vec3): vec3
    
    reflect(planeNormal: vec3): vec3
    
    rotateTowards(target: vec3, step: number): vec3
    
    scale(vec: vec3): vec3
    
    sub(vec: vec3): vec3
    
    toString(): string
    
    uniformScale(scale: number): vec3
    
    b: number
    
    g: number
    
    length: number
    
    lengthSquared: number
    
    r: number
    
    x: number
    
    y: number
    
    z: number
    
    static back(): vec3
    
    static down(): vec3
    
    static forward(): vec3
    
    static left(): vec3
    
    static lerp(a: vec3, b: vec3, time: number): vec3
    
    static max(a: vec3, b: vec3): vec3
    
    static min(a: vec3, b: vec3): vec3
    
    static one(): vec3
    
    static orthonormalize(a: vec3, b: vec3): void
    
    static randomDirection(): vec3
    
    static right(): vec3
    
    static slerp(a: vec3, b: vec3, time: number): vec3
    
    static up(): vec3
    
    static zero(): vec3
    
}

declare class vec4 {
    constructor(x: number, y: number, z: number, w: number)
    
    add(vec: vec4): vec4
    
    angleTo(vec: vec4): number
    
    clampLength(length: number): vec4
    
    distance(vec: vec4): number
    
    distanceSquared(vec: vec4): number
    
    div(vec: vec4): vec4
    
    dot(vec: vec4): number
    
    equal(vec: vec4): boolean
    
    moveTowards(target: vec4, step: number): vec4
    
    mult(vec: vec4): vec4
    
    normalize(): vec4
    
    project(normal: vec4): vec4
    
    projectOnPlane(planeNormal: vec4): vec4
    
    reflect(planeNormal: vec4): vec4
    
    scale(vec: vec4): vec4
    
    sub(vec: vec4): vec4
    
    toString(): string
    
    uniformScale(scale: number): vec4
    
    a: number
    
    b: number
    
    g: number
    
    length: number
    
    lengthSquared: number
    
    r: number
    
    w: number
    
    x: number
    
    y: number
    
    z: number
    
    static lerp(a: vec4, b: vec4, time: number): vec4
    
    static max(a: vec4, b: vec4): vec4
    
    static min(a: vec4, b: vec4): vec4
    
    static one(): vec4
    
    static zero(): vec4
    
}

declare class vec4b {
    constructor(x: boolean, y: boolean, z: boolean, w: boolean)
    
    toString(): string
    
    a: boolean
    
    b: boolean
    
    g: boolean
    
    r: boolean
    
    w: boolean
    
    x: boolean
    
    y: boolean
    
    z: boolean
    
}

/**
 * @module LensStudio:GeneralUtils.js
 */
declare module "LensStudio:GeneralUtils.js" {
/**
 * Converts a callback-based function to a Promise-based function.
 * @param fn The callback-based function to convert.
 * @returns A Promise-based version of the function.
 */
export function promisify<T>(fn: (callback: (err: Error | null, result?: T) => void) => void): Promise<T>;

}
/**
 * @module LensStudio:HierarchyUtils.js
 */
declare module "LensStudio:HierarchyUtils.js" {
/**
 * Represents the options for creating a scene object.
 */
export interface CreateOptions {
    /**
     * The scene in which the object will be created.
     */
    scene: Editor.Assets.Scene;
    /**
     * The parent object under which the new object will be created.
     */
    parent: Editor.Model.SceneObject;
    /**
     * The type(s) of component(s) to be attached to the new object.
     * if null, no component will be attached.
     */
    componentType: string | string[] | null;
    /**
     * The name of the new object
     */
    name: string;
}
/**
 * Represents the options for searching.
 */
export interface SearchOptions {
    /**
     * The maximum depth to search. 1 means only the immediate children of the base object.
     */
    maxDepth?: number;
    /**
     * Indicates whether to find all matches or stop at the first match.
     */
    findAll?: boolean;
    /**
     * Indicates whether to create the item if it is not found.
     */
    createIfNotFound?: boolean;
    /**
     * The options for creating the item.
     */
    createOptions?: CreateOptions;
}
/**
 * Finds a scene object or an array of scene objects in the ancestors of a given base scene object by the specified component type.
 *
 * @param base - The base scene object from which to start the search.
 * @param componentType - The type of component to search for.
 * @param options - Optional search options.
 * @param options.maxDepth - The maximum depth to search. Default is 100.
 * @param options.findAll - Whether to find all matches. Default is false.
 * @param options.createIfNotFound - Whether to create if not found. Default is false.
 * @param options.createOptions - Options for creation if needed.
 * @returns An array of found scene objects, or null if not found.
 */
export function findInAncestorsByType(base: Editor.Model.SceneObject, componentType: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds a scene object or an array of scene objects within the descendants of a base scene object, based on the specified component type.
 *
 * @param base - The base scene object or scene to search within.
 * @param componentType - The type of component to search for.
 * @param options - Optional search options.
 * @returns an array of found scene objects, or null if not found.
 */
export function findInDescendantsByType(base: Editor.Model.SceneObject | Editor.Assets.Scene, componentType: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds a scene object with the specified name in the ancestors of the given base scene object.
 *
 * @param base - The base scene object from which to start the search.
 * @param name - The name of the scene object to find. Only exact matches are considered.
 * @param options - The search options.
 * @returns The found scene object if `findAll` is `false`, an array of found scene objects if `findAll` is `true`, or `null` if no scene object is found.
 */
export function findInAncestorsByName(base: Editor.Model.SceneObject, name: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds a scene object or an array of scene objects in the descendants of a base scene object by name.
 *
 * @param base - The base scene object to search in.
 * @param name - The name of the scene object(s) to find. Only exact matches are considered.
 * @param options - Optional search options.
 * @param options.maxDepth - The maximum depth to search. 1 means only the immediate children of the base object. Default is 100.
 * @param options.findAll - Indicates whether to find all matches or stop at the first match. Default is false.
 * @param options.createIfNotFound - Indicates whether to create the item if it is not found. Default is false.
 * @param options.createOptions - The options for creating the item. Default is null.
 *
 *
 * @returns an array of found scene objects, or null if not found.
 */
export function findInDescendantsByName(base: Editor.Model.SceneObject | Editor.Assets.Scene, name: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds objects of a specific component type in the root of a scene.
 *
 * @param scene - The scene to search in.
 * @param componentType - The type of component to search for.
 * @param options - Additional search options.
 * @returns an array of found scene objects, or null if not found.
 */
export function findInRootObjectsByType(scene: Editor.Assets.Scene, componentType: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds a scene object or an array of scene objects in the root objects of a scene by name.
 *
 * @param scene - The scene to search in.
 * @param name - The name of the scene object(s) to find. Only exact matches are considered.
 * @param options - The search options.
 * @returns an array of found scene objects, or null if not found.
 */
export function findInRootObjectsByName(scene: Editor.Assets.Scene, name: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds or creates a child scene object with the specified name under the given root object.
 * It only searches the immediate children of the root object.
 * If a child object with the specified name already exists, it is returned.
 * Otherwise, a new scene object is created, added to the scene, and assigned the specified name.
 *
 * @param rootObject - The root object under which to search for or create the child object.
 * @param name - The name of the child object to find or create. Only exact matches are considered.
 * @param scene - The scene in which to add the new scene object if it needs to be created.
 * @returns The found or created child scene object.
 */
export function findOrCreateChildWithName(rootObject: Editor.Model.SceneObject, name: string, scene: Editor.Assets.Scene): Editor.Model.SceneObject;
/**
 * Finds the nearest camera in the ancestors of the given scene object.
 *
 * @param baseSceneObject - The scene object from which to start the search.
 * @param cameraType - The type of camera to search for (e.g., Orthographic, Perspective). Use null for any type.
 * @param maxDepth - Maximum search depth. Default is 1000.
 * @returns The nearest matching camera or null.
 */
export function findNearestCameraInAncestors(baseSceneObject: Editor.Model.SceneObject, cameraType?: Editor.Components.CameraType, maxDepth?: number): Editor.Model.SceneObject;
/**
 * Finds the nearest camera ancestor of a scene object, if one exists.
 * if not, it returns the first camera in the scene.
 *
 * @param sceneObject - The scene object to search for orthographic camera ancestors.
 * @param cameraType - The type of camera to search for, or null to find any camera.
 * @returns The nearest camera ancestor of the scene object, or null if none is found.
 */
export function getNearestOrFirstCamera(sceneObject: Editor.Model.SceneObject, scene: Editor.Assets.Scene, cameraType?: Editor.Components.CameraType): Editor.Model.SceneObject;
/**
 * Finds the first camera in the scene.
 *
 * @param cameraType - The type of camera to search for, or null to find any camera.
 * @returns The first camera in the scene model, or null if none is found.
 */
export function getFirstCameraInScene(scene: Editor.Assets.Scene, cameraType?: Editor.Components.CameraType): Editor.Model.SceneObject;
/**
 * Retrieves or creates a canvas component for a given camera object.
 *
 * @param cameraObject - The camera object to retrieve or create the canvas component for.
 * @param unitType - The unit type for the canvas component.
 * @returns The canvas component associated with the camera object.
 */
export function getOrCreateCanvas(cameraObject: Editor.Model.SceneObject, unitType: Editor.Components.UnitType): Editor.Components.Canvas;
/**
 * Retrieves or creates a ScreenRegionComponent for a given camera object and scene.
 *
 * @param cameraObject - The camera object to search for a ScreenRegionComponent.
 * @param scene - The scene in which to create the ScreenRegionComponent if it doesn't exist.
 * @returns The ScreenRegionComponent associated with the camera object, or a newly created one.
 */
export function getOrCreateScreenRegion(cameraObject: Editor.Model.SceneObject, scene: Editor.Assets.Scene): Editor.Components.ScreenRegionComponent;
/**
 * Creates an orthographic camera component on a scene object.
 *
 * @param scene - The scene in which the camera will be created.
 * @param sceneObject - The scene object on which the camera component will be added.
 * @param unitType - The unit type for the canvas component (optional, default is `Editor.Components.UnitType.Points`).
 * @returns The modified scene object with the added camera and canvas components.
 */
export function createOrthoCameraOnObject(scene: Editor.Assets.Scene, sceneObject: Editor.Model.SceneObject, unitType?: Editor.Components.UnitType, renderLayer?: Editor.Model.LayerId): Editor.Model.SceneObject;
/**
 * Creates a perspective camera on the specified scene object.
 *
 * @param scene - The scene in which the camera will be created.
 * @param sceneObject - The scene object on which the camera will be added.
 * @returns The modified scene object with the added camera component.
 */
export function createPerspectiveCameraOnObject(scene: Editor.Assets.Scene, sceneObject: Editor.Model.SceneObject, renderLayer?: Editor.Model.LayerId): Editor.Model.SceneObject;
/**
 * Finds or creates an orthographic camera for a given scene object.
 *
 * @param scene - The scene in which the camera will be created or searched.
 * @param sceneObject - The scene object for which the camera will be created or searched.
 * @param canvasUnitType - The unit type for the canvas component of the camera. Defaults to `Editor.Components.UnitType.Points`.
 * @returns An object containing the camera object, screen region component, and canvas component.
 */
export function findOrCreateOrthoCameraForObject(scene: Editor.Assets.Scene, sceneObject: Editor.Model.SceneObject, canvasUnitType?: Editor.Components.UnitType): {
    cameraObject: Editor.Model.SceneObject;
    screenRegionComponent: Editor.Components.ScreenRegionComponent;
    canvasComponent: Editor.Components.Canvas;
};
/**
 * Finds or creates a camera object of the specified type within the given scene.
 *
 * @param scene - The scene in which to find or create the camera object.
 * @param cameraType - The type of camera to find or create (Orthographic or Perspective).
 * @param bearerSceneObject - Optional. The scene object to which the new camera will be attached if created.
 * @returns The scene object containing the camera of the specified type.
 * @throws Will throw an error if the camera type is invalid.
 */
export function findOrCreateCameraObject(scene: Editor.Assets.Scene, cameraType: Editor.Components.CameraType, bearerSceneObject?: Editor.Model.SceneObject): Editor.Model.SceneObject;

}
/**
 * @module LensStudio:LcaUtils.js
 */
declare module "LensStudio:LcaUtils.js" {
import * as Network from "LensStudio:Network";
/**
 * Adds LCA token to Http Request
 *
 * @param request - Request object which LCA token needs to be attached to
 * @param issuer - Issuer URL which used for generating LCA token
 */
export function attachLCAHeader(request: Network.HttpRequest, issuer: string): void;

}
/**
 * The following interfaces are returned by various APIs
 * and allows you to bind some callback when `connect` occurs.
*/

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal0<R> {
    connect(callback: () => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal1<T0, R> {
    connect(callback: (arg0:T0) => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal2<T0,T1, R> {
    connect(callback: (arg0:T0, arg1:T1) => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal3<T0,T1,T2, R> {
    connect(callback: (arg0:T0, arg1:T1, arg2:T2) => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal4<T0,T1,T2,T3, R> {
    connect(callback: (arg0:T0, arg1:T1, arg2:T2, arg3:T3) => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal5<T0,T1,T2,T3,T4, R> {
    connect(callback: (arg0:T0, arg1:T1, arg2:T2, arg3:T3, arg4:T4) => R) : Editor.ScopedConnection
}

/**
 * LensCore provides an environment where `import.meta` is available.
 * This declaration file is needed because it is not a standard part
 * of ES2019. It is included in the `dom` lib, which plugins don't use.
 */
interface ImportMeta {
    resolve(path: string): string
    url: string
}
/**
 * @module LensStudio:AssetUtils.js
 */
declare module "LensStudio:AssetUtils.js" {
export enum ShaderGraphType {
    ShaderGraphImage = 0,
    ShaderGraphUberPbr = 1,
    ShaderGraphUnlit = 2,
    ShaderGraphOccluder = 3,
    ShaderGraphGltf = 4
}
/**
 * Retrieves the resource file absolute path for the specified asset type.
 *
 * @param assetType - The type of the asset, use ShaderGraphType enum.
 * @returns The absolute path of the resource file.
 */
export function getResourceFile(assetType: ShaderGraphType): Editor.Path;
/**
 * Finds or creates an asset in the asset manager.
 *
 * @param assetManager - The asset manager instance.
 * @param assetAbsPath - The absolute path of the asset.
 * @param destDirInProject - The destination directory in the project. this is a relative path to the project Assets root.
 * @returns The primary asset found or created.
 * @throws Error if there is an error importing the asset or if the import result is invalid.
 */
export function findOrCreateNonNativeAsset(assetManager: Editor.Model.AssetManager, assetAbsPath: Editor.Path, destDirInProject: Editor.Path): Promise<Editor.Assets.Asset>;
/**
 * Finds or creates a native asset with the specified name.
 *
 * @param nativeAssetTypeName - The name of the native asset.
 * @param assetManager - The asset manager.
 * @param basename - The base name of the asset.
 * @param destinationDir - the relative path to Assets root in the project, if searching will be limited to this directory,
 * and the asset will be created in this directory if not found. If not provided, the search will be done in the entire
 * project and the creation will be in the root directory.
 * @returns The found or created native asset.
 */
export function findOrCreateNativeAsset(nativeAssetTypeName: string, assetManager: Editor.Model.AssetManager, basename: string, destinationDir?: Editor.Path): Editor.Assets.Asset;
/**
 * Finds an asset in the asset manager based on the specified type, name, and optional parent directory.
 *
 * @param assetManager
 * @param assetType - The type of the asset to find.
 * @param assetName - The name of the asset to find.
 * @param parentDir - (Optional) The parent directory of the asset. If provided, the asset's source path must match this directory.
 * @returns An array of assets that match the specified criteria.
 */
export function findAsset(assetManager: Editor.Model.AssetManager, assetType: string, assetName: string, parentDir?: Editor.Path): Editor.Assets.Asset[];
/**
 * Finds or creates an object tracking texture asset.
 *
 * @param assetManager - The asset manager to search for or create the asset.
 * @param destination - The destination path for the asset.
 * @param type - The type of the object tracking texture.
 * @returns The found or created object tracking texture asset.
 */
export function findOrCreateObjectTrackingTexture(assetManager: Editor.Model.AssetManager, destination: Editor.Path, type: Editor.Assets.ObjectTrackingTextureType): Editor.Assets.Asset;
/**
 * Finds or creates a screen texture asset.
 *
 * @param assetManager - The asset manager to use.
 * @param destination - The destination path for the asset.
 * @returns The screen texture asset.
 */
export function findOrCreateScreenTexture(assetManager: Editor.Model.AssetManager, destination: Editor.Path): Editor.Assets.Asset;
/**
 * Creates a material from a shader graph asset.
 *
 * @param assetManager - The asset manager used to create the material.
 * @param graphType - The type of the shader graph asset.
 * @param materialDir - The directory where the material will be created. Default is an empty string.
 * @param materialName - The name of the material. Default is 'new material'.
 * @param shaderGraphDir - The directory of the shader graph asset. Default is an empty string.
 * @returns An object containing the created material asset, the shader graph asset, and the pass on the material.
 */
export function createMaterialFromGraph(assetManager: Editor.Model.AssetManager, graphType: ShaderGraphType, materialDir?: string, materialName?: string, shaderGraphDir?: string): Promise<{
    material: Editor.Assets.Material;
    shaderGraphAsset: Editor.Assets.Pass;
    passInfo: Editor.Assets.PassInfo;
}>;
/**
 * Adds a pass to the given material and optionally adds define strings to the pass.
 *
 * @param material - The material to which the pass will be added.
 * @param pass - The pass to be added to the material.
 * @param addDefineStrings - An optional array of define strings to be added to the pass. Defaults to ['ENABLE_BASE_TEX'].
 * @returns The pass information after adding the pass and define strings.
 */
export function addGraphToMaterial(material: Editor.Assets.Material, pass: Editor.Assets.Pass, addDefineStrings?: string[]): Editor.Assets.PassInfo;
/**
 * Imports an image as a texture and sets up its wrap mode.
 *
 * @param assetManager
 * @param imageFileAbsolutePath - The absolute path to the image file.
 * @param wrapMode - The wrap mode for the texture. Defaults to `Editor.Assets.WrapMode.ClampToEdge`.
 * @param imageImportDestinationDir - The directory where the image will be imported. Defaults to "Images".
 * @returns An object containing the image asset and texture parameter.
 *
 * @throws Will log an error if the image asset fails to load.
 */
export function importImageAsTexture(assetManager: Editor.Model.AssetManager, imageFileAbsolutePath: string, wrapMode?: Editor.Assets.WrapMode, imageImportDestinationDir?: string): Promise<{
    imageAsset: Editor.Assets.Asset;
    textureParam: Editor.Assets.TextureParameter;
}>;
/**
 * Add a define to the pass info's defines array.
 * @param passInfo - The pass info object to modify.
 * @param define - The define string to add.
 */
export function addDefine(passInfo: Editor.Assets.PassInfo, define: string): void;
/**
 * Set up the wrap mode for a sampler. If only one wrap mode is provided, it's applied to all dimensions.
 * @param sampler - The sampler to modify.
 * @param wrapModeU - The wrap mode for U dimension.
 * @param wrapModeV - The wrap mode for V dimension. If not provided, uses wrapModeU.
 * @param wrapModeW - The wrap mode for W dimension. If not provided, uses wrapModeU.
 * @returns The modified sampler.
 */
export function setupSamplerWrapMode(sampler: Editor.Assets.Sampler, wrapModeU: Editor.Assets.WrapMode, wrapModeV?: Editor.Assets.WrapMode, wrapModeW?: Editor.Assets.WrapMode): Editor.Assets.Sampler;

}
