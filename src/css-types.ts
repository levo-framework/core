export interface StandardLonghandProperties<TLength = string | 0> {
  alignContent?: AlignContentProperty;
  alignItems?: AlignItemsProperty;
  alignSelf?: AlignSelfProperty;
  animationDelay?: GlobalsString;
  animationDirection?: AnimationDirectionProperty;
  animationDuration?: GlobalsString;
  animationFillMode?: AnimationFillModeProperty;
  animationIterationCount?: AnimationIterationCountProperty;
  animationName?: AnimationNameProperty;
  animationPlayState?: AnimationPlayStateProperty;
  animationTimingFunction?: AnimationTimingFunctionProperty;
  appearance?: AppearanceProperty;
  aspectRatio?: AspectRatioProperty;
  backdropFilter?: BackdropFilterProperty;
  backfaceVisibility?: BackfaceVisibilityProperty;
  backgroundAttachment?: BackgroundAttachmentProperty;
  backgroundBlendMode?: BackgroundBlendModeProperty;
  backgroundClip?: BackgroundClipProperty;
  backgroundColor?: BackgroundColorProperty;
  backgroundImage?: BackgroundImageProperty;
  backgroundOrigin?: BackgroundOriginProperty;
  backgroundPosition?: BackgroundPositionProperty<TLength>;
  backgroundPositionX?: BackgroundPositionXProperty<TLength>;
  backgroundPositionY?: BackgroundPositionYProperty<TLength>;
  backgroundRepeat?: BackgroundRepeatProperty;
  backgroundSize?: BackgroundSizeProperty<TLength>;
  
  blockOverflow?: BlockOverflowProperty;
  blockSize?: BlockSizeProperty<TLength>;
  borderBlockColor?: BorderBlockColorProperty;
  borderBlockEndColor?: BorderBlockEndColorProperty;
  borderBlockEndStyle?: BorderBlockEndStyleProperty;
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength>;
  borderBlockStartColor?: BorderBlockStartColorProperty;
  borderBlockStartStyle?: BorderBlockStartStyleProperty;
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength>;
  borderBlockStyle?: BorderBlockStyleProperty;
  borderBlockWidth?: BorderBlockWidthProperty<TLength>;
  borderBottomColor?: BorderBottomColorProperty;
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  borderBottomStyle?: BorderBottomStyleProperty;
  borderBottomWidth?: BorderBottomWidthProperty<TLength>;
  borderCollapse?: BorderCollapseProperty;
  borderEndEndRadius?: BorderEndEndRadiusProperty<TLength>;
  borderEndStartRadius?: BorderEndStartRadiusProperty<TLength>;
  borderImageOutset?: BorderImageOutsetProperty<TLength>;
  borderImageRepeat?: BorderImageRepeatProperty;
  borderImageSlice?: BorderImageSliceProperty;
  borderImageSource?: BorderImageSourceProperty;
  borderImageWidth?: BorderImageWidthProperty<TLength>;
  borderInlineColor?: BorderInlineColorProperty;
  borderInlineEndColor?: BorderInlineEndColorProperty;
  borderInlineEndStyle?: BorderInlineEndStyleProperty;
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength>;
  borderInlineStartColor?: BorderInlineStartColorProperty;
  borderInlineStartStyle?: BorderInlineStartStyleProperty;
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength>;
  borderInlineStyle?: BorderInlineStyleProperty;
  borderInlineWidth?: BorderInlineWidthProperty<TLength>;
  borderLeftColor?: BorderLeftColorProperty;
  borderLeftStyle?: BorderLeftStyleProperty;
  borderLeftWidth?: BorderLeftWidthProperty<TLength>;
  borderRightColor?: BorderRightColorProperty;
  borderRightStyle?: BorderRightStyleProperty;
  borderRightWidth?: BorderRightWidthProperty<TLength>;
  borderSpacing?: BorderSpacingProperty<TLength>;
  borderStartEndRadius?: BorderStartEndRadiusProperty<TLength>;
  borderStartStartRadius?: BorderStartStartRadiusProperty<TLength>;
  borderTopColor?: BorderTopColorProperty;
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  borderTopStyle?: BorderTopStyleProperty;
  borderTopWidth?: BorderTopWidthProperty<TLength>;
  bottom?: BottomProperty<TLength>;
  boxDecorationBreak?: BoxDecorationBreakProperty;
  boxShadow?: BoxShadowProperty;
  boxSizing?: BoxSizingProperty;
  breakAfter?: BreakAfterProperty;
  breakBefore?: BreakBeforeProperty;
  breakInside?: BreakInsideProperty;
  captionSide?: CaptionSideProperty;
  caretColor?: CaretColorProperty;
  clear?: ClearProperty;
  clipPath?: ClipPathProperty;
  color?: ColorProperty;
  colorAdjust?: ColorAdjustProperty;
  columnCount?: ColumnCountProperty;
  columnFill?: ColumnFillProperty;
  columnGap?: ColumnGapProperty<TLength>;
  columnRuleColor?: ColumnRuleColorProperty;
  columnRuleStyle?: ColumnRuleStyleProperty;
  columnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  columnSpan?: ColumnSpanProperty;
  columnWidth?: ColumnWidthProperty<TLength>;
  contain?: ContainProperty;
  content?: ContentProperty;
  counterIncrement?: CounterIncrementProperty;
  counterReset?: CounterResetProperty;
  counterSet?: CounterSetProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  emptyCells?: EmptyCellsProperty;
  filter?: FilterProperty;
  flexBasis?: FlexBasisProperty<TLength>;
  flexDirection?: FlexDirectionProperty;
  flexGrow?: GlobalsNumber;
  flexShrink?: GlobalsNumber;
  flexWrap?: FlexWrapProperty;
  float?: FloatProperty;
  fontFamily?: FontFamilyProperty;
  fontFeatureSettings?: FontFeatureSettingsProperty;
  fontKerning?: FontKerningProperty;
  fontLanguageOverride?: FontLanguageOverrideProperty;
  fontOpticalSizing?: FontOpticalSizingProperty;
  fontSize?: FontSizeProperty<TLength>;
  fontSizeAdjust?: FontSizeAdjustProperty;
  fontStretch?: FontStretchProperty;
  fontStyle?: FontStyleProperty;
  fontSynthesis?: FontSynthesisProperty;
  fontVariant?: FontVariantProperty;
  fontVariantCaps?: FontVariantCapsProperty;
  fontVariantEastAsian?: FontVariantEastAsianProperty;
  fontVariantLigatures?: FontVariantLigaturesProperty;
  fontVariantNumeric?: FontVariantNumericProperty;
  fontVariantPosition?: FontVariantPositionProperty;
  fontVariationSettings?: FontVariationSettingsProperty;
  fontWeight?: FontWeightProperty;
  gridAutoColumns?: GridAutoColumnsProperty<TLength>;
  gridAutoFlow?: GridAutoFlowProperty;
  gridAutoRows?: GridAutoRowsProperty<TLength>;
  gridColumnEnd?: GridColumnEndProperty;
  gridColumnStart?: GridColumnStartProperty;
  gridRowEnd?: GridRowEndProperty;
  gridRowStart?: GridRowStartProperty;
  gridTemplateAreas?: GridTemplateAreasProperty;
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength>;
  gridTemplateRows?: GridTemplateRowsProperty<TLength>;
  hangingPunctuation?: HangingPunctuationProperty;
  height?: HeightProperty<TLength>;
  hyphens?: HyphensProperty;
  imageOrientation?: ImageOrientationProperty;
  imageRendering?: ImageRenderingProperty;
  
  imageResolution?: ImageResolutionProperty;
  initialLetter?: InitialLetterProperty;
  inlineSize?: InlineSizeProperty<TLength>;
  inset?: InsetProperty<TLength>;
  insetBlock?: InsetBlockProperty<TLength>;
  insetBlockEnd?: InsetBlockEndProperty<TLength>;
  insetBlockStart?: InsetBlockStartProperty<TLength>;
  insetInline?: InsetInlineProperty<TLength>;
  insetInlineEnd?: InsetInlineEndProperty<TLength>;
  insetInlineStart?: InsetInlineStartProperty<TLength>;
  isolation?: IsolationProperty;
  justifyContent?: JustifyContentProperty;
  justifyItems?: JustifyItemsProperty;
  justifySelf?: JustifySelfProperty;
  left?: LeftProperty<TLength>;
  letterSpacing?: LetterSpacingProperty<TLength>;
  lineBreak?: LineBreakProperty;
  lineHeight?: LineHeightProperty<TLength>;
  lineHeightStep?: LineHeightStepProperty<TLength>;
  listStyleImage?: ListStyleImageProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleType?: ListStyleTypeProperty;
  marginBlock?: MarginBlockProperty<TLength>;
  marginBlockEnd?: MarginBlockEndProperty<TLength>;
  marginBlockStart?: MarginBlockStartProperty<TLength>;
  marginBottom?: MarginBottomProperty<TLength>;
  marginInline?: MarginInlineProperty<TLength>;
  marginInlineEnd?: MarginInlineEndProperty<TLength>;
  marginInlineStart?: MarginInlineStartProperty<TLength>;
  marginLeft?: MarginLeftProperty<TLength>;
  marginRight?: MarginRightProperty<TLength>;
  marginTop?: MarginTopProperty<TLength>;
  
  maskBorderMode?: MaskBorderModeProperty;
  
  maskBorderOutset?: MaskBorderOutsetProperty<TLength>;
  
  maskBorderRepeat?: MaskBorderRepeatProperty;
  
  maskBorderSlice?: MaskBorderSliceProperty;
  
  maskBorderSource?: MaskBorderSourceProperty;
  
  maskBorderWidth?: MaskBorderWidthProperty<TLength>;
  maskClip?: MaskClipProperty;
  maskComposite?: MaskCompositeProperty;
  maskImage?: MaskImageProperty;
  maskMode?: MaskModeProperty;
  maskOrigin?: MaskOriginProperty;
  maskPosition?: MaskPositionProperty<TLength>;
  maskRepeat?: MaskRepeatProperty;
  maskSize?: MaskSizeProperty<TLength>;
  maskType?: MaskTypeProperty;
  maxBlockSize?: MaxBlockSizeProperty<TLength>;
  maxHeight?: MaxHeightProperty<TLength>;
  maxInlineSize?: MaxInlineSizeProperty<TLength>;
  
  maxLines?: MaxLinesProperty;
  maxWidth?: MaxWidthProperty<TLength>;
  minBlockSize?: MinBlockSizeProperty<TLength>;
  minHeight?: MinHeightProperty<TLength>;
  minInlineSize?: MinInlineSizeProperty<TLength>;
  minWidth?: MinWidthProperty<TLength>;
  mixBlendMode?: MixBlendModeProperty;
  motionDistance?: OffsetDistanceProperty<TLength>;
  motionPath?: OffsetPathProperty;
  motionRotation?: OffsetRotateProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty<TLength>;
  offsetAnchor?: OffsetAnchorProperty<TLength>;
  offsetDistance?: OffsetDistanceProperty<TLength>;
  offsetPath?: OffsetPathProperty;
  offsetRotate?: OffsetRotateProperty;
  offsetRotation?: OffsetRotateProperty;
  opacity?: OpacityProperty;
  order?: GlobalsNumber;
  orphans?: GlobalsNumber;
  outlineColor?: OutlineColorProperty;
  outlineOffset?: OutlineOffsetProperty<TLength>;
  outlineStyle?: OutlineStyleProperty;
  outlineWidth?: OutlineWidthProperty<TLength>;
  overflowAnchor?: OverflowAnchorProperty;
  overflowBlock?: OverflowBlockProperty;
  overflowClipBox?: OverflowClipBoxProperty;
  overflowInline?: OverflowInlineProperty;
  overflowWrap?: OverflowWrapProperty;
  overflowX?: OverflowXProperty;
  overflowY?: OverflowYProperty;
  overscrollBehavior?: OverscrollBehaviorProperty;
  overscrollBehaviorBlock?: OverscrollBehaviorBlockProperty;
  overscrollBehaviorInline?: OverscrollBehaviorInlineProperty;
  overscrollBehaviorX?: OverscrollBehaviorXProperty;
  overscrollBehaviorY?: OverscrollBehaviorYProperty;
  paddingBlock?: PaddingBlockProperty<TLength>;
  paddingBlockEnd?: PaddingBlockEndProperty<TLength>;
  paddingBlockStart?: PaddingBlockStartProperty<TLength>;
  paddingBottom?: PaddingBottomProperty<TLength>;
  paddingInline?: PaddingInlineProperty<TLength>;
  paddingInlineEnd?: PaddingInlineEndProperty<TLength>;
  paddingInlineStart?: PaddingInlineStartProperty<TLength>;
  paddingLeft?: PaddingLeftProperty<TLength>;
  paddingRight?: PaddingRightProperty<TLength>;
  paddingTop?: PaddingTopProperty<TLength>;
  pageBreakAfter?: PageBreakAfterProperty;
  pageBreakBefore?: PageBreakBeforeProperty;
  pageBreakInside?: PageBreakInsideProperty;
  paintOrder?: PaintOrderProperty;
  perspective?: PerspectiveProperty<TLength>;
  perspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  placeContent?: PlaceContentProperty;
  pointerEvents?: PointerEventsProperty;
  position?: PositionProperty;
  quotes?: QuotesProperty;
  resize?: ResizeProperty;
  right?: RightProperty<TLength>;
  rotate?: RotateProperty;
  rowGap?: RowGapProperty<TLength>;
  rubyAlign?: RubyAlignProperty;
  
  rubyMerge?: RubyMergeProperty;
  rubyPosition?: RubyPositionProperty;
  scale?: ScaleProperty;
  scrollBehavior?: ScrollBehaviorProperty;
  scrollMargin?: ScrollMarginProperty<TLength>;
  scrollMarginBlock?: ScrollMarginBlockProperty<TLength>;
  scrollMarginBlockEnd?: ScrollMarginBlockEndProperty<TLength>;
  scrollMarginBlockStart?: ScrollMarginBlockStartProperty<TLength>;
  scrollMarginBottom?: ScrollMarginBottomProperty<TLength>;
  scrollMarginInline?: ScrollMarginInlineProperty<TLength>;
  scrollMarginInlineEnd?: ScrollMarginInlineEndProperty<TLength>;
  scrollMarginInlineStart?: ScrollMarginInlineStartProperty<TLength>;
  scrollMarginLeft?: ScrollMarginLeftProperty<TLength>;
  scrollMarginRight?: ScrollMarginRightProperty<TLength>;
  scrollMarginTop?: ScrollMarginTopProperty<TLength>;
  scrollPadding?: ScrollPaddingProperty<TLength>;
  scrollPaddingBlock?: ScrollPaddingBlockProperty<TLength>;
  scrollPaddingBlockEnd?: ScrollPaddingBlockEndProperty<TLength>;
  scrollPaddingBlockStart?: ScrollPaddingBlockStartProperty<TLength>;
  scrollPaddingBottom?: ScrollPaddingBottomProperty<TLength>;
  scrollPaddingInline?: ScrollPaddingInlineProperty<TLength>;
  scrollPaddingInlineEnd?: ScrollPaddingInlineEndProperty<TLength>;
  scrollPaddingInlineStart?: ScrollPaddingInlineStartProperty<TLength>;
  scrollPaddingLeft?: ScrollPaddingLeftProperty<TLength>;
  scrollPaddingRight?: ScrollPaddingRightProperty<TLength>;
  scrollPaddingTop?: ScrollPaddingTopProperty<TLength>;
  scrollSnapAlign?: ScrollSnapAlignProperty;
  scrollSnapMargin?: ScrollMarginProperty<TLength>;
  scrollSnapMarginBottom?: ScrollMarginBottomProperty<TLength>;
  scrollSnapMarginLeft?: ScrollMarginLeftProperty<TLength>;
  scrollSnapMarginRight?: ScrollMarginRightProperty<TLength>;
  scrollSnapMarginTop?: ScrollMarginTopProperty<TLength>;
  scrollSnapStop?: ScrollSnapStopProperty;
  scrollSnapType?: ScrollSnapTypeProperty;
  scrollbarColor?: ScrollbarColorProperty;
  scrollbarWidth?: ScrollbarWidthProperty;
  shapeImageThreshold?: ShapeImageThresholdProperty;
  shapeMargin?: ShapeMarginProperty<TLength>;
  shapeOutside?: ShapeOutsideProperty;
  tabSize?: TabSizeProperty<TLength>;
  tableLayout?: TableLayoutProperty;
  textAlign?: TextAlignProperty;
  textAlignLast?: TextAlignLastProperty;
  textCombineUpright?: TextCombineUprightProperty;
  textDecorationColor?: TextDecorationColorProperty;
  textDecorationLine?: TextDecorationLineProperty;
  textDecorationSkip?: TextDecorationSkipProperty;
  textDecorationSkipInk?: TextDecorationSkipInkProperty;
  textDecorationStyle?: TextDecorationStyleProperty;
  textDecorationThickness?: TextDecorationThicknessProperty<TLength>;
  textDecorationWidth?: TextDecorationThicknessProperty<TLength>;
  textEmphasisColor?: TextEmphasisColorProperty;
  textEmphasisPosition?: GlobalsString;
  textEmphasisStyle?: TextEmphasisStyleProperty;
  textIndent?: TextIndentProperty<TLength>;
  textJustify?: TextJustifyProperty;
  textOrientation?: TextOrientationProperty;
  textOverflow?: TextOverflowProperty;
  textRendering?: TextRenderingProperty;
  textShadow?: TextShadowProperty;
  textSizeAdjust?: TextSizeAdjustProperty;
  textTransform?: TextTransformProperty;
  textUnderlineOffset?: TextUnderlineOffsetProperty<TLength>;
  textUnderlinePosition?: TextUnderlinePositionProperty;
  top?: TopProperty<TLength>;
  touchAction?: TouchActionProperty;
  transform?: TransformProperty;
  transformBox?: TransformBoxProperty;
  transformOrigin?: TransformOriginProperty<TLength>;
  transformStyle?: TransformStyleProperty;
  transitionDelay?: GlobalsString;
  transitionDuration?: GlobalsString;
  transitionProperty?: TransitionPropertyProperty;
  transitionTimingFunction?: TransitionTimingFunctionProperty;
  translate?: TranslateProperty<TLength>;
  unicodeBidi?: UnicodeBidiProperty;
  userSelect?: UserSelectProperty;
  verticalAlign?: VerticalAlignProperty<TLength>;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  widows?: GlobalsNumber;
  width?: WidthProperty<TLength>;
  willChange?: WillChangeProperty;
  wordBreak?: WordBreakProperty;
  wordSpacing?: WordSpacingProperty<TLength>;
  wordWrap?: WordWrapProperty;
  writingMode?: WritingModeProperty;
  zIndex?: ZIndexProperty;
  zoom?: ZoomProperty;
}

export interface StandardShorthandProperties<TLength = string | 0> {
  all?: Globals;
  animation?: AnimationProperty;
  background?: BackgroundProperty<TLength>;
  border?: BorderProperty<TLength>;
  borderBlock?: BorderBlockProperty<TLength>;
  borderBlockEnd?: BorderBlockEndProperty<TLength>;
  borderBlockStart?: BorderBlockStartProperty<TLength>;
  borderBottom?: BorderBottomProperty<TLength>;
  borderColor?: BorderColorProperty;
  borderImage?: BorderImageProperty;
  borderInline?: BorderInlineProperty<TLength>;
  borderInlineEnd?: BorderInlineEndProperty<TLength>;
  borderInlineStart?: BorderInlineStartProperty<TLength>;
  borderLeft?: BorderLeftProperty<TLength>;
  borderRadius?: BorderRadiusProperty<TLength>;
  borderRight?: BorderRightProperty<TLength>;
  borderStyle?: BorderStyleProperty;
  borderTop?: BorderTopProperty<TLength>;
  borderWidth?: BorderWidthProperty<TLength>;
  columnRule?: ColumnRuleProperty<TLength>;
  columns?: ColumnsProperty<TLength>;
  flex?: FlexProperty<TLength>;
  flexFlow?: FlexFlowProperty;
  font?: FontProperty;
  gap?: GapProperty<TLength>;
  grid?: GridProperty;
  gridArea?: GridAreaProperty;
  gridColumn?: GridColumnProperty;
  gridRow?: GridRowProperty;
  gridTemplate?: GridTemplateProperty;
  
  lineClamp?: LineClampProperty;
  listStyle?: ListStyleProperty;
  margin?: MarginProperty<TLength>;
  mask?: MaskProperty<TLength>;
  maskBorder?: MaskBorderProperty;
  motion?: OffsetProperty<TLength>;
  offset?: OffsetProperty<TLength>;
  outline?: OutlineProperty<TLength>;
  overflow?: OverflowProperty;
  padding?: PaddingProperty<TLength>;
  placeItems?: PlaceItemsProperty;
  placeSelf?: PlaceSelfProperty;
  textDecoration?: TextDecorationProperty<TLength>;
  textEmphasis?: TextEmphasisProperty;
  transition?: TransitionProperty;
}

export interface StandardProperties<TLength = string | 0>
  extends
    StandardLonghandProperties<TLength>,
    StandardShorthandProperties<TLength> {}

export interface VendorLonghandProperties<TLength = string | 0> {
  
  MozAnimationDelay?: GlobalsString;
  
  MozAnimationDirection?: AnimationDirectionProperty;
  
  MozAnimationDuration?: GlobalsString;
  
  MozAnimationFillMode?: AnimationFillModeProperty;
  
  MozAnimationIterationCount?: AnimationIterationCountProperty;
  
  MozAnimationName?: AnimationNameProperty;
  
  MozAnimationPlayState?: AnimationPlayStateProperty;
  
  MozAnimationTimingFunction?: AnimationTimingFunctionProperty;
  
  MozAppearance?: MozAppearanceProperty;
  
  MozBackfaceVisibility?: BackfaceVisibilityProperty;
  
  MozBorderEndColor?: BorderInlineEndColorProperty;
  
  MozBorderEndStyle?: BorderInlineEndStyleProperty;
  
  MozBorderEndWidth?: BorderInlineEndWidthProperty<TLength>;
  
  MozBorderStartColor?: BorderInlineStartColorProperty;
  
  MozBorderStartStyle?: BorderInlineStartStyleProperty;
  
  MozBoxSizing?: BoxSizingProperty;
  
  MozColumnCount?: ColumnCountProperty;
  
  MozColumnFill?: ColumnFillProperty;
  
  MozColumnGap?: ColumnGapProperty<TLength>;
  
  MozColumnRuleColor?: ColumnRuleColorProperty;
  
  MozColumnRuleStyle?: ColumnRuleStyleProperty;
  
  MozColumnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  
  MozColumnWidth?: ColumnWidthProperty<TLength>;
  
  MozContextProperties?: MozContextPropertiesProperty;
  
  MozFloatEdge?: MozFloatEdgeProperty;
  
  MozFontFeatureSettings?: FontFeatureSettingsProperty;
  
  MozFontLanguageOverride?: FontLanguageOverrideProperty;
  
  MozForceBrokenImageIcon?: GlobalsNumber;
  
  MozHyphens?: HyphensProperty;
  
  MozImageRegion?: MozImageRegionProperty;
  
  MozMarginEnd?: MarginInlineEndProperty<TLength>;
  
  MozMarginStart?: MarginInlineStartProperty<TLength>;
  
  MozOrient?: MozOrientProperty;
  
  MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty<TLength>;
  
  MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty<TLength>;
  
  MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty<TLength>;
  
  MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty<TLength>;
  
  MozPaddingEnd?: PaddingInlineEndProperty<TLength>;
  
  MozPaddingStart?: PaddingInlineStartProperty<TLength>;
  
  MozPerspective?: PerspectiveProperty<TLength>;
  
  MozPerspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  
  MozStackSizing?: MozStackSizingProperty;
  
  MozTabSize?: TabSizeProperty<TLength>;
  
  MozTextSizeAdjust?: TextSizeAdjustProperty;
  
  MozTransformOrigin?: TransformOriginProperty<TLength>;
  
  MozTransformStyle?: TransformStyleProperty;
  
  MozTransitionDelay?: GlobalsString;
  
  MozTransitionDuration?: GlobalsString;
  
  MozTransitionProperty?: TransitionPropertyProperty;
  
  MozTransitionTimingFunction?: TransitionTimingFunctionProperty;
  
  MozUserFocus?: MozUserFocusProperty;
  
  MozUserModify?: MozUserModifyProperty;
  
  MozUserSelect?: UserSelectProperty;
  
  MozWindowDragging?: MozWindowDraggingProperty;
  
  msAccelerator?: MsAcceleratorProperty;
  
  msAlignSelf?: AlignSelfProperty;
  
  msBlockProgression?: MsBlockProgressionProperty;
  
  msContentZoomChaining?: MsContentZoomChainingProperty;
  
  msContentZoomLimitMax?: GlobalsString;
  
  msContentZoomLimitMin?: GlobalsString;
  
  msContentZoomSnapPoints?: GlobalsString;
  
  msContentZoomSnapType?: MsContentZoomSnapTypeProperty;
  
  msContentZooming?: MsContentZoomingProperty;
  
  msFilter?: GlobalsString;
  
  msFlexDirection?: FlexDirectionProperty;
  
  msFlexPositive?: GlobalsNumber;
  
  msFlowFrom?: MsFlowFromProperty;
  
  msFlowInto?: MsFlowIntoProperty;
  
  msGridColumns?: GridAutoColumnsProperty<TLength>;
  
  msGridRows?: GridAutoRowsProperty<TLength>;
  
  msHighContrastAdjust?: MsHighContrastAdjustProperty;
  
  msHyphenateLimitChars?: MsHyphenateLimitCharsProperty;
  
  msHyphenateLimitLines?: MsHyphenateLimitLinesProperty;
  
  msHyphenateLimitZone?: MsHyphenateLimitZoneProperty<TLength>;
  
  msHyphens?: HyphensProperty;
  
  msImeAlign?: MsImeAlignProperty;
  
  msLineBreak?: LineBreakProperty;
  
  msOrder?: GlobalsNumber;
  
  msOverflowStyle?: MsOverflowStyleProperty;
  
  msOverflowX?: OverflowXProperty;
  
  msOverflowY?: OverflowYProperty;
  
  msScrollChaining?: MsScrollChainingProperty;
  
  msScrollLimitXMax?: MsScrollLimitXMaxProperty<TLength>;
  
  msScrollLimitXMin?: MsScrollLimitXMinProperty<TLength>;
  
  msScrollLimitYMax?: MsScrollLimitYMaxProperty<TLength>;
  
  msScrollLimitYMin?: MsScrollLimitYMinProperty<TLength>;
  
  msScrollRails?: MsScrollRailsProperty;
  
  msScrollSnapPointsX?: GlobalsString;
  
  msScrollSnapPointsY?: GlobalsString;
  
  msScrollSnapType?: MsScrollSnapTypeProperty;
  
  msScrollTranslation?: MsScrollTranslationProperty;
  
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty;
  
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty;
  
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty;
  
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty;
  
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty;
  
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty;
  
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty;
  
  msTextAutospace?: MsTextAutospaceProperty;
  
  msTextCombineHorizontal?: TextCombineUprightProperty;
  
  msTextOverflow?: TextOverflowProperty;
  
  msTouchAction?: TouchActionProperty;
  
  msTouchSelect?: MsTouchSelectProperty;
  
  msTransform?: TransformProperty;
  
  msTransformOrigin?: TransformOriginProperty<TLength>;
  
  msTransitionDelay?: GlobalsString;
  
  msTransitionDuration?: GlobalsString;
  
  msTransitionProperty?: TransitionPropertyProperty;
  
  msTransitionTimingFunction?: TransitionTimingFunctionProperty;
  
  msUserSelect?: MsUserSelectProperty;
  
  msWordBreak?: WordBreakProperty;
  
  msWrapFlow?: MsWrapFlowProperty;
  
  msWrapMargin?: MsWrapMarginProperty<TLength>;
  
  msWrapThrough?: MsWrapThroughProperty;
  
  msWritingMode?: WritingModeProperty;
  
  OObjectFit?: ObjectFitProperty;
  
  OObjectPosition?: ObjectPositionProperty<TLength>;
  
  OTabSize?: TabSizeProperty<TLength>;
  
  OTextOverflow?: TextOverflowProperty;
  
  OTransformOrigin?: TransformOriginProperty<TLength>;
  
  WebkitAlignContent?: AlignContentProperty;
  
  WebkitAlignItems?: AlignItemsProperty;
  
  WebkitAlignSelf?: AlignSelfProperty;
  
  WebkitAnimationDelay?: GlobalsString;
  
  WebkitAnimationDirection?: AnimationDirectionProperty;
  
  WebkitAnimationDuration?: GlobalsString;
  
  WebkitAnimationFillMode?: AnimationFillModeProperty;
  
  WebkitAnimationIterationCount?: AnimationIterationCountProperty;
  
  WebkitAnimationName?: AnimationNameProperty;
  
  WebkitAnimationPlayState?: AnimationPlayStateProperty;
  
  WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty;
  
  WebkitAppearance?: WebkitAppearanceProperty;
  
  WebkitBackdropFilter?: BackdropFilterProperty;
  
  WebkitBackfaceVisibility?: BackfaceVisibilityProperty;
  
  WebkitBackgroundClip?: BackgroundClipProperty;
  
  WebkitBackgroundOrigin?: BackgroundOriginProperty;
  
  WebkitBackgroundSize?: BackgroundSizeProperty<TLength>;
  
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty;
  
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty;
  
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength>;
  
  WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  
  WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  
  WebkitBorderImageSlice?: BorderImageSliceProperty;
  
  WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  
  WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  
  WebkitBoxDecorationBreak?: BoxDecorationBreakProperty;
  
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength>;
  
  WebkitBoxShadow?: BoxShadowProperty;
  
  WebkitBoxSizing?: BoxSizingProperty;
  
  WebkitClipPath?: ClipPathProperty;
  
  WebkitColorAdjust?: ColorAdjustProperty;
  
  WebkitColumnCount?: ColumnCountProperty;
  
  WebkitColumnFill?: ColumnFillProperty;
  
  WebkitColumnGap?: ColumnGapProperty<TLength>;
  
  WebkitColumnRuleColor?: ColumnRuleColorProperty;
  
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty;
  
  WebkitColumnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  
  WebkitColumnSpan?: ColumnSpanProperty;
  
  WebkitColumnWidth?: ColumnWidthProperty<TLength>;
  
  WebkitFilter?: FilterProperty;
  
  WebkitFlexBasis?: FlexBasisProperty<TLength>;
  
  WebkitFlexDirection?: FlexDirectionProperty;
  
  WebkitFlexGrow?: GlobalsNumber;
  
  WebkitFlexShrink?: GlobalsNumber;
  
  WebkitFlexWrap?: FlexWrapProperty;
  
  WebkitFontFeatureSettings?: FontFeatureSettingsProperty;
  
  WebkitFontKerning?: FontKerningProperty;
  
  WebkitFontVariantLigatures?: FontVariantLigaturesProperty;
  
  WebkitHyphens?: HyphensProperty;
  
  WebkitJustifyContent?: JustifyContentProperty;
  
  WebkitLineBreak?: LineBreakProperty;
  
  WebkitLineClamp?: WebkitLineClampProperty;
  
  WebkitMarginEnd?: MarginInlineEndProperty<TLength>;
  
  WebkitMarginStart?: MarginInlineStartProperty<TLength>;
  
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty;
  
  WebkitMaskClip?: WebkitMaskClipProperty;
  
  WebkitMaskComposite?: WebkitMaskCompositeProperty;
  
  WebkitMaskImage?: WebkitMaskImageProperty;
  
  WebkitMaskOrigin?: WebkitMaskOriginProperty;
  
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength>;
  
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength>;
  
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength>;
  
  WebkitMaskRepeat?: WebkitMaskRepeatProperty;
  
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty;
  
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty;
  
  WebkitMaskSize?: WebkitMaskSizeProperty<TLength>;
  
  WebkitMaxInlineSize?: MaxInlineSizeProperty<TLength>;
  
  WebkitOrder?: GlobalsNumber;
  
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty;
  
  WebkitPaddingEnd?: PaddingInlineEndProperty<TLength>;
  
  WebkitPaddingStart?: PaddingInlineStartProperty<TLength>;
  
  WebkitPerspective?: PerspectiveProperty<TLength>;
  
  WebkitPerspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  
  WebkitScrollSnapType?: ScrollSnapTypeProperty;
  
  WebkitShapeMargin?: ShapeMarginProperty<TLength>;
  
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty;
  
  WebkitTextCombine?: TextCombineUprightProperty;
  
  WebkitTextDecorationColor?: TextDecorationColorProperty;
  
  WebkitTextDecorationLine?: TextDecorationLineProperty;
  
  WebkitTextDecorationSkip?: TextDecorationSkipProperty;
  
  WebkitTextDecorationStyle?: TextDecorationStyleProperty;
  
  WebkitTextEmphasisColor?: TextEmphasisColorProperty;
  
  WebkitTextEmphasisPosition?: GlobalsString;
  
  WebkitTextEmphasisStyle?: TextEmphasisStyleProperty;
  
  WebkitTextFillColor?: WebkitTextFillColorProperty;
  
  WebkitTextOrientation?: TextOrientationProperty;
  
  WebkitTextSizeAdjust?: TextSizeAdjustProperty;
  
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty;
  
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>;
  
  WebkitTouchCallout?: WebkitTouchCalloutProperty;
  
  WebkitTransform?: TransformProperty;
  
  WebkitTransformOrigin?: TransformOriginProperty<TLength>;
  
  WebkitTransformStyle?: TransformStyleProperty;
  
  WebkitTransitionDelay?: GlobalsString;
  
  WebkitTransitionDuration?: GlobalsString;
  
  WebkitTransitionProperty?: TransitionPropertyProperty;
  
  WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty;
  
  WebkitUserModify?: WebkitUserModifyProperty;
  
  WebkitUserSelect?: UserSelectProperty;
  
  WebkitWritingMode?: WritingModeProperty;
  
  WebkittextUnderlinePosition?: TextUnderlinePositionProperty;
}

export interface VendorShorthandProperties<TLength = string | 0> {
  
  MozAnimation?: AnimationProperty;
  MozBorderImage?: BorderImageProperty;
  
  MozColumnRule?: ColumnRuleProperty<TLength>;
  
  MozColumns?: ColumnsProperty<TLength>;
  
  MozTransition?: TransitionProperty;
  
  msContentZoomLimit?: GlobalsString;
  
  msContentZoomSnap?: MsContentZoomSnapProperty;
  
  msFlex?: FlexProperty<TLength>;
  
  msScrollLimit?: GlobalsString;
  
  msScrollSnapX?: GlobalsString;
  
  msScrollSnapY?: GlobalsString;
  
  msTransition?: TransitionProperty;
  
  WebkitAnimation?: AnimationProperty;
  
  WebkitBorderBefore?: WebkitBorderBeforeProperty<TLength>;
  WebkitBorderImage?: BorderImageProperty;
  WebkitBorderRadius?: BorderRadiusProperty<TLength>;
  
  WebkitColumnRule?: ColumnRuleProperty<TLength>;
  
  WebkitColumns?: ColumnsProperty<TLength>;
  
  WebkitFlex?: FlexProperty<TLength>;
  
  WebkitFlexFlow?: FlexFlowProperty;
  WebkitMask?: WebkitMaskProperty<TLength>;
  
  WebkitTextEmphasis?: TextEmphasisProperty;
  
  WebkitTextStroke?: WebkitTextStrokeProperty<TLength>;
  
  WebkitTransition?: TransitionProperty;
}

export interface VendorProperties<TLength = string | 0>
  extends
    VendorLonghandProperties<TLength>,
    VendorShorthandProperties<TLength> {}

export interface ObsoleteProperties<TLength = string | 0> {
  
  boxAlign?: BoxAlignProperty;
  
  boxDirection?: BoxDirectionProperty;
  
  boxFlex?: GlobalsNumber;
  
  boxFlexGroup?: GlobalsNumber;
  
  boxLines?: BoxLinesProperty;
  
  boxOrdinalGroup?: GlobalsNumber;
  
  boxOrient?: BoxOrientProperty;
  
  boxPack?: BoxPackProperty;
  
  clip?: ClipProperty;
  
  fontVariantAlternates?: FontVariantAlternatesProperty;
  
  gridColumnGap?: GridColumnGapProperty<TLength>;
  
  gridGap?: GridGapProperty<TLength>;
  
  gridRowGap?: GridRowGapProperty<TLength>;
  
  imeMode?: ImeModeProperty;
  
  offsetBlock?: InsetBlockProperty<TLength>;
  
  offsetBlockEnd?: InsetBlockEndProperty<TLength>;
  
  offsetBlockStart?: InsetBlockStartProperty<TLength>;
  
  offsetInline?: InsetInlineProperty<TLength>;
  
  offsetInlineEnd?: InsetInlineEndProperty<TLength>;
  
  offsetInlineStart?: InsetInlineStartProperty<TLength>;
  
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength>;
  
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength>;
  
  scrollSnapPointsX?: ScrollSnapPointsXProperty;
  
  scrollSnapPointsY?: ScrollSnapPointsYProperty;
  
  scrollSnapTypeX?: ScrollSnapTypeXProperty;
  
  scrollSnapTypeY?: ScrollSnapTypeYProperty;
  
  scrollbarTrackColor?: MsScrollbarTrackColorProperty;
  
  textCombineHorizontal?: TextCombineUprightProperty;
  
  KhtmlBoxAlign?: BoxAlignProperty;
  
  KhtmlBoxDirection?: BoxDirectionProperty;
  
  KhtmlBoxFlex?: GlobalsNumber;
  
  KhtmlBoxFlexGroup?: GlobalsNumber;
  
  KhtmlBoxLines?: BoxLinesProperty;
  
  KhtmlBoxOrdinalGroup?: GlobalsNumber;
  
  KhtmlBoxOrient?: BoxOrientProperty;
  
  KhtmlBoxPack?: BoxPackProperty;
  
  KhtmlLineBreak?: LineBreakProperty;
  
  KhtmlOpacity?: OpacityProperty;
  
  KhtmlUserSelect?: UserSelectProperty;
  
  MozBackgroundClip?: BackgroundClipProperty;
  
  MozBackgroundInlinePolicy?: BoxDecorationBreakProperty;
  
  MozBackgroundOrigin?: BackgroundOriginProperty;
  
  MozBackgroundSize?: BackgroundSizeProperty<TLength>;
  
  MozBinding?: MozBindingProperty;
  
  MozBorderBottomColors?: MozBorderBottomColorsProperty;
  
  MozBorderLeftColors?: MozBorderLeftColorsProperty;
  MozBorderRadius?: BorderRadiusProperty<TLength>;
  
  MozBorderRadiusBottomleft?: BorderBottomLeftRadiusProperty<TLength>;
  
  MozBorderRadiusBottomright?: BorderBottomRightRadiusProperty<TLength>;
  
  MozBorderRadiusTopleft?: BorderTopLeftRadiusProperty<TLength>;
  
  MozBorderRadiusTopright?: BorderTopRightRadiusProperty<TLength>;
  
  MozBorderRightColors?: MozBorderRightColorsProperty;
  
  MozBorderTopColors?: MozBorderTopColorsProperty;
  
  MozBoxAlign?: BoxAlignProperty;
  
  MozBoxDirection?: BoxDirectionProperty;
  
  MozBoxFlex?: GlobalsNumber;
  
  MozBoxOrdinalGroup?: GlobalsNumber;
  
  MozBoxOrient?: BoxOrientProperty;
  
  MozBoxPack?: BoxPackProperty;
  
  MozBoxShadow?: BoxShadowProperty;
  
  MozOpacity?: OpacityProperty;
  
  MozOutline?: OutlineProperty<TLength>;
  
  MozOutlineColor?: OutlineColorProperty;
  MozOutlineRadius?: MozOutlineRadiusProperty<TLength>;
  
  MozOutlineStyle?: OutlineStyleProperty;
  
  MozOutlineWidth?: OutlineWidthProperty<TLength>;
  
  MozTextAlignLast?: TextAlignLastProperty;
  
  MozTextBlink?: MozTextBlinkProperty;
  
  MozTextDecorationColor?: TextDecorationColorProperty;
  
  MozTextDecorationLine?: TextDecorationLineProperty;
  
  MozTextDecorationStyle?: TextDecorationStyleProperty;
  
  MozUserInput?: MozUserInputProperty;
  
  MozWindowShadow?: MozWindowShadowProperty;
  
  msImeMode?: ImeModeProperty;
  
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty;
  
  OAnimation?: AnimationProperty;
  
  OAnimationDelay?: GlobalsString;
  
  OAnimationDirection?: AnimationDirectionProperty;
  
  OAnimationDuration?: GlobalsString;
  
  OAnimationFillMode?: AnimationFillModeProperty;
  
  OAnimationIterationCount?: AnimationIterationCountProperty;
  
  OAnimationName?: AnimationNameProperty;
  
  OAnimationPlayState?: AnimationPlayStateProperty;
  
  OAnimationTimingFunction?: AnimationTimingFunctionProperty;
  
  OBackgroundSize?: BackgroundSizeProperty<TLength>;
  OBorderImage?: BorderImageProperty;
  
  OTransform?: TransformProperty;
  
  OTransition?: TransitionProperty;
  
  OTransitionDelay?: GlobalsString;
  
  OTransitionDuration?: GlobalsString;
  
  OTransitionProperty?: TransitionPropertyProperty;
  
  OTransitionTimingFunction?: TransitionTimingFunctionProperty;
  
  WebkitBoxAlign?: BoxAlignProperty;
  
  WebkitBoxDirection?: BoxDirectionProperty;
  
  WebkitBoxFlex?: GlobalsNumber;
  
  WebkitBoxFlexGroup?: GlobalsNumber;
  
  WebkitBoxLines?: BoxLinesProperty;
  
  WebkitBoxOrdinalGroup?: GlobalsNumber;
  
  WebkitBoxOrient?: BoxOrientProperty;
  
  WebkitBoxPack?: BoxPackProperty;
  
  WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty;
  
  WebkitScrollSnapPointsY?: ScrollSnapPointsYProperty;
}

export interface SvgProperties<TLength = string | 0> {
  alignmentBaseline?: AlignmentBaselineProperty;
  baselineShift?: BaselineShiftProperty<TLength>;
  clip?: ClipProperty;
  clipPath?: ClipPathProperty;
  clipRule?: ClipRuleProperty;
  color?: ColorProperty;
  colorInterpolation?: ColorInterpolationProperty;
  colorRendering?: ColorRenderingProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  dominantBaseline?: DominantBaselineProperty;
  fill?: FillProperty;
  fillOpacity?: GlobalsNumber;
  fillRule?: FillRuleProperty;
  filter?: FilterProperty;
  floodColor?: FloodColorProperty;
  floodOpacity?: GlobalsNumber;
  font?: FontProperty;
  fontFamily?: FontFamilyProperty;
  fontSize?: FontSizeProperty<TLength>;
  fontSizeAdjust?: FontSizeAdjustProperty;
  fontStretch?: FontStretchProperty;
  fontStyle?: FontStyleProperty;
  fontVariant?: FontVariantProperty;
  fontWeight?: FontWeightProperty;
  glyphOrientationVertical?: GlyphOrientationVerticalProperty;
  imageRendering?: ImageRenderingProperty;
  letterSpacing?: LetterSpacingProperty<TLength>;
  lightingColor?: LightingColorProperty;
  lineHeight?: LineHeightProperty<TLength>;
  marker?: MarkerProperty;
  markerEnd?: MarkerEndProperty;
  markerMid?: MarkerMidProperty;
  markerStart?: MarkerStartProperty;
  mask?: MaskProperty<TLength>;
  opacity?: OpacityProperty;
  overflow?: OverflowProperty;
  paintOrder?: PaintOrderProperty;
  pointerEvents?: PointerEventsProperty;
  shapeRendering?: ShapeRenderingProperty;
  stopColor?: StopColorProperty;
  stopOpacity?: GlobalsNumber;
  stroke?: StrokeProperty;
  strokeDasharray?: StrokeDasharrayProperty<TLength>;
  strokeDashoffset?: StrokeDashoffsetProperty<TLength>;
  strokeLinecap?: StrokeLinecapProperty;
  strokeLinejoin?: StrokeLinejoinProperty;
  strokeMiterlimit?: GlobalsNumber;
  strokeOpacity?: GlobalsNumber;
  strokeWidth?: StrokeWidthProperty<TLength>;
  textAnchor?: TextAnchorProperty;
  textDecoration?: TextDecorationProperty<TLength>;
  textRendering?: TextRenderingProperty;
  unicodeBidi?: UnicodeBidiProperty;
  vectorEffect?: VectorEffectProperty;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  wordSpacing?: WordSpacingProperty<TLength>;
  writingMode?: WritingModeProperty;
}

export interface Properties<TLength = string | 0>
  extends
    StandardProperties<TLength>,
    VendorProperties<TLength>,
    ObsoleteProperties<TLength>,
    SvgProperties<TLength> {}


export interface StandardLonghandPropertiesFallback<TLength = string | 0> {
  alignContent?: AlignContentProperty | AlignContentProperty[];
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  alignSelf?: AlignSelfProperty | AlignSelfProperty[];
  animationDelay?: GlobalsString | GlobalsString[];
  animationDirection?:
    | AnimationDirectionProperty
    | AnimationDirectionProperty[];
  animationDuration?: GlobalsString | GlobalsString[];
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  animationIterationCount?:
    | AnimationIterationCountProperty
    | AnimationIterationCountProperty[];
  animationName?: AnimationNameProperty | AnimationNameProperty[];
  animationPlayState?:
    | AnimationPlayStateProperty
    | AnimationPlayStateProperty[];
  animationTimingFunction?:
    | AnimationTimingFunctionProperty
    | AnimationTimingFunctionProperty[];
  appearance?: AppearanceProperty | AppearanceProperty[];
  aspectRatio?: AspectRatioProperty | AspectRatioProperty[];
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  backfaceVisibility?:
    | BackfaceVisibilityProperty
    | BackfaceVisibilityProperty[];
  backgroundAttachment?:
    | BackgroundAttachmentProperty
    | BackgroundAttachmentProperty[];
  backgroundBlendMode?:
    | BackgroundBlendModeProperty
    | BackgroundBlendModeProperty[];
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[];
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[];
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  backgroundPosition?:
    | BackgroundPositionProperty<TLength>
    | BackgroundPositionProperty<TLength>[];
  backgroundPositionX?:
    | BackgroundPositionXProperty<TLength>
    | BackgroundPositionXProperty<TLength>[];
  backgroundPositionY?:
    | BackgroundPositionYProperty<TLength>
    | BackgroundPositionYProperty<TLength>[];
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  backgroundSize?:
    | BackgroundSizeProperty<TLength>
    | BackgroundSizeProperty<TLength>[];
  
  blockOverflow?: BlockOverflowProperty | BlockOverflowProperty[];
  blockSize?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  borderBlockColor?: BorderBlockColorProperty | BorderBlockColorProperty[];
  borderBlockEndColor?:
    | BorderBlockEndColorProperty
    | BorderBlockEndColorProperty[];
  borderBlockEndStyle?:
    | BorderBlockEndStyleProperty
    | BorderBlockEndStyleProperty[];
  borderBlockEndWidth?:
    | BorderBlockEndWidthProperty<TLength>
    | BorderBlockEndWidthProperty<TLength>[];
  borderBlockStartColor?:
    | BorderBlockStartColorProperty
    | BorderBlockStartColorProperty[];
  borderBlockStartStyle?:
    | BorderBlockStartStyleProperty
    | BorderBlockStartStyleProperty[];
  borderBlockStartWidth?:
    | BorderBlockStartWidthProperty<TLength>
    | BorderBlockStartWidthProperty<TLength>[];
  borderBlockStyle?: BorderBlockStyleProperty | BorderBlockStyleProperty[];
  borderBlockWidth?:
    | BorderBlockWidthProperty<TLength>
    | BorderBlockWidthProperty<TLength>[];
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[];
  borderBottomLeftRadius?:
    | BorderBottomLeftRadiusProperty<TLength>
    | BorderBottomLeftRadiusProperty<TLength>[];
  borderBottomRightRadius?:
    | BorderBottomRightRadiusProperty<TLength>
    | BorderBottomRightRadiusProperty<TLength>[];
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  borderBottomWidth?:
    | BorderBottomWidthProperty<TLength>
    | BorderBottomWidthProperty<TLength>[];
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[];
  borderEndEndRadius?:
    | BorderEndEndRadiusProperty<TLength>
    | BorderEndEndRadiusProperty<TLength>[];
  borderEndStartRadius?:
    | BorderEndStartRadiusProperty<TLength>
    | BorderEndStartRadiusProperty<TLength>[];
  borderImageOutset?:
    | BorderImageOutsetProperty<TLength>
    | BorderImageOutsetProperty<TLength>[];
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[];
  borderImageWidth?:
    | BorderImageWidthProperty<TLength>
    | BorderImageWidthProperty<TLength>[];
  borderInlineColor?: BorderInlineColorProperty | BorderInlineColorProperty[];
  borderInlineEndColor?:
    | BorderInlineEndColorProperty
    | BorderInlineEndColorProperty[];
  borderInlineEndStyle?:
    | BorderInlineEndStyleProperty
    | BorderInlineEndStyleProperty[];
  borderInlineEndWidth?:
    | BorderInlineEndWidthProperty<TLength>
    | BorderInlineEndWidthProperty<TLength>[];
  borderInlineStartColor?:
    | BorderInlineStartColorProperty
    | BorderInlineStartColorProperty[];
  borderInlineStartStyle?:
    | BorderInlineStartStyleProperty
    | BorderInlineStartStyleProperty[];
  borderInlineStartWidth?:
    | BorderInlineStartWidthProperty<TLength>
    | BorderInlineStartWidthProperty<TLength>[];
  borderInlineStyle?: BorderInlineStyleProperty | BorderInlineStyleProperty[];
  borderInlineWidth?:
    | BorderInlineWidthProperty<TLength>
    | BorderInlineWidthProperty<TLength>[];
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[];
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  borderLeftWidth?:
    | BorderLeftWidthProperty<TLength>
    | BorderLeftWidthProperty<TLength>[];
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[];
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[];
  borderRightWidth?:
    | BorderRightWidthProperty<TLength>
    | BorderRightWidthProperty<TLength>[];
  borderSpacing?:
    | BorderSpacingProperty<TLength>
    | BorderSpacingProperty<TLength>[];
  borderStartEndRadius?:
    | BorderStartEndRadiusProperty<TLength>
    | BorderStartEndRadiusProperty<TLength>[];
  borderStartStartRadius?:
    | BorderStartStartRadiusProperty<TLength>
    | BorderStartStartRadiusProperty<TLength>[];
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[];
  borderTopLeftRadius?:
    | BorderTopLeftRadiusProperty<TLength>
    | BorderTopLeftRadiusProperty<TLength>[];
  borderTopRightRadius?:
    | BorderTopRightRadiusProperty<TLength>
    | BorderTopRightRadiusProperty<TLength>[];
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[];
  borderTopWidth?:
    | BorderTopWidthProperty<TLength>
    | BorderTopWidthProperty<TLength>[];
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  boxDecorationBreak?:
    | BoxDecorationBreakProperty
    | BoxDecorationBreakProperty[];
  boxShadow?: BoxShadowProperty | BoxShadowProperty[];
  boxSizing?: BoxSizingProperty | BoxSizingProperty[];
  breakAfter?: BreakAfterProperty | BreakAfterProperty[];
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[];
  breakInside?: BreakInsideProperty | BreakInsideProperty[];
  captionSide?: CaptionSideProperty | CaptionSideProperty[];
  caretColor?: CaretColorProperty | CaretColorProperty[];
  clear?: ClearProperty | ClearProperty[];
  clipPath?: ClipPathProperty | ClipPathProperty[];
  color?: ColorProperty | ColorProperty[];
  colorAdjust?: ColorAdjustProperty | ColorAdjustProperty[];
  columnCount?: ColumnCountProperty | ColumnCountProperty[];
  columnFill?: ColumnFillProperty | ColumnFillProperty[];
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  columnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  columnRuleWidth?:
    | ColumnRuleWidthProperty<TLength>
    | ColumnRuleWidthProperty<TLength>[];
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  contain?: ContainProperty | ContainProperty[];
  content?: ContentProperty | ContentProperty[];
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[];
  counterReset?: CounterResetProperty | CounterResetProperty[];
  counterSet?: CounterSetProperty | CounterSetProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[];
  filter?: FilterProperty | FilterProperty[];
  flexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  flexGrow?: GlobalsNumber | GlobalsNumber[];
  flexShrink?: GlobalsNumber | GlobalsNumber[];
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  float?: FloatProperty | FloatProperty[];
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  fontFeatureSettings?:
    | FontFeatureSettingsProperty
    | FontFeatureSettingsProperty[];
  fontKerning?: FontKerningProperty | FontKerningProperty[];
  fontLanguageOverride?:
    | FontLanguageOverrideProperty
    | FontLanguageOverrideProperty[];
  fontOpticalSizing?: FontOpticalSizingProperty | FontOpticalSizingProperty[];
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[];
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[];
  fontVariantEastAsian?:
    | FontVariantEastAsianProperty
    | FontVariantEastAsianProperty[];
  fontVariantLigatures?:
    | FontVariantLigaturesProperty
    | FontVariantLigaturesProperty[];
  fontVariantNumeric?:
    | FontVariantNumericProperty
    | FontVariantNumericProperty[];
  fontVariantPosition?:
    | FontVariantPositionProperty
    | FontVariantPositionProperty[];
  fontVariationSettings?:
    | FontVariationSettingsProperty
    | FontVariationSettingsProperty[];
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  gridAutoColumns?:
    | GridAutoColumnsProperty<TLength>
    | GridAutoColumnsProperty<TLength>[];
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[];
  gridAutoRows?:
    | GridAutoRowsProperty<TLength>
    | GridAutoRowsProperty<TLength>[];
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[];
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[];
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[];
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[];
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  gridTemplateColumns?:
    | GridTemplateColumnsProperty<TLength>
    | GridTemplateColumnsProperty<TLength>[];
  gridTemplateRows?:
    | GridTemplateRowsProperty<TLength>
    | GridTemplateRowsProperty<TLength>[];
  hangingPunctuation?:
    | HangingPunctuationProperty
    | HangingPunctuationProperty[];
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  hyphens?: HyphensProperty | HyphensProperty[];
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[];
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  
  imageResolution?: ImageResolutionProperty | ImageResolutionProperty[];
  initialLetter?: InitialLetterProperty | InitialLetterProperty[];
  inlineSize?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  inset?: InsetProperty<TLength> | InsetProperty<TLength>[];
  insetBlock?: InsetBlockProperty<TLength> | InsetBlockProperty<TLength>[];
  insetBlockEnd?:
    | InsetBlockEndProperty<TLength>
    | InsetBlockEndProperty<TLength>[];
  insetBlockStart?:
    | InsetBlockStartProperty<TLength>
    | InsetBlockStartProperty<TLength>[];
  insetInline?: InsetInlineProperty<TLength> | InsetInlineProperty<TLength>[];
  insetInlineEnd?:
    | InsetInlineEndProperty<TLength>
    | InsetInlineEndProperty<TLength>[];
  insetInlineStart?:
    | InsetInlineStartProperty<TLength>
    | InsetInlineStartProperty<TLength>[];
  isolation?: IsolationProperty | IsolationProperty[];
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  justifyItems?: JustifyItemsProperty | JustifyItemsProperty[];
  justifySelf?: JustifySelfProperty | JustifySelfProperty[];
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  letterSpacing?:
    | LetterSpacingProperty<TLength>
    | LetterSpacingProperty<TLength>[];
  lineBreak?: LineBreakProperty | LineBreakProperty[];
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  lineHeightStep?:
    | LineHeightStepProperty<TLength>
    | LineHeightStepProperty<TLength>[];
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[];
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[];
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[];
  marginBlock?: MarginBlockProperty<TLength> | MarginBlockProperty<TLength>[];
  marginBlockEnd?:
    | MarginBlockEndProperty<TLength>
    | MarginBlockEndProperty<TLength>[];
  marginBlockStart?:
    | MarginBlockStartProperty<TLength>
    | MarginBlockStartProperty<TLength>[];
  marginBottom?:
    | MarginBottomProperty<TLength>
    | MarginBottomProperty<TLength>[];
  marginInline?:
    | MarginInlineProperty<TLength>
    | MarginInlineProperty<TLength>[];
  marginInlineEnd?:
    | MarginInlineEndProperty<TLength>
    | MarginInlineEndProperty<TLength>[];
  marginInlineStart?:
    | MarginInlineStartProperty<TLength>
    | MarginInlineStartProperty<TLength>[];
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  
  maskBorderMode?: MaskBorderModeProperty | MaskBorderModeProperty[];
  
  maskBorderOutset?:
    | MaskBorderOutsetProperty<TLength>
    | MaskBorderOutsetProperty<TLength>[];
  
  maskBorderRepeat?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  
  maskBorderSlice?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  
  maskBorderSource?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  
  maskBorderWidth?:
    | MaskBorderWidthProperty<TLength>
    | MaskBorderWidthProperty<TLength>[];
  maskClip?: MaskClipProperty | MaskClipProperty[];
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[];
  maskImage?: MaskImageProperty | MaskImageProperty[];
  maskMode?: MaskModeProperty | MaskModeProperty[];
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[];
  maskPosition?:
    | MaskPositionProperty<TLength>
    | MaskPositionProperty<TLength>[];
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[];
  maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  maskType?: MaskTypeProperty | MaskTypeProperty[];
  maxBlockSize?:
    | MaxBlockSizeProperty<TLength>
    | MaxBlockSizeProperty<TLength>[];
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  maxInlineSize?:
    | MaxInlineSizeProperty<TLength>
    | MaxInlineSizeProperty<TLength>[];
  
  maxLines?: MaxLinesProperty | MaxLinesProperty[];
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  minBlockSize?:
    | MinBlockSizeProperty<TLength>
    | MinBlockSizeProperty<TLength>[];
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  minInlineSize?:
    | MinInlineSizeProperty<TLength>
    | MinInlineSizeProperty<TLength>[];
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[];
  motionDistance?:
    | OffsetDistanceProperty<TLength>
    | OffsetDistanceProperty<TLength>[];
  motionPath?: OffsetPathProperty | OffsetPathProperty[];
  motionRotation?: OffsetRotateProperty | OffsetRotateProperty[];
  objectFit?: ObjectFitProperty | ObjectFitProperty[];
  objectPosition?:
    | ObjectPositionProperty<TLength>
    | ObjectPositionProperty<TLength>[];
  offsetAnchor?:
    | OffsetAnchorProperty<TLength>
    | OffsetAnchorProperty<TLength>[];
  offsetDistance?:
    | OffsetDistanceProperty<TLength>
    | OffsetDistanceProperty<TLength>[];
  offsetPath?: OffsetPathProperty | OffsetPathProperty[];
  offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[];
  offsetRotation?: OffsetRotateProperty | OffsetRotateProperty[];
  opacity?: OpacityProperty | OpacityProperty[];
  order?: GlobalsNumber | GlobalsNumber[];
  orphans?: GlobalsNumber | GlobalsNumber[];
  outlineColor?: OutlineColorProperty | OutlineColorProperty[];
  outlineOffset?:
    | OutlineOffsetProperty<TLength>
    | OutlineOffsetProperty<TLength>[];
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  outlineWidth?:
    | OutlineWidthProperty<TLength>
    | OutlineWidthProperty<TLength>[];
  overflowAnchor?: OverflowAnchorProperty | OverflowAnchorProperty[];
  overflowBlock?: OverflowBlockProperty | OverflowBlockProperty[];
  overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  overflowInline?: OverflowInlineProperty | OverflowInlineProperty[];
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[];
  overflowX?: OverflowXProperty | OverflowXProperty[];
  overflowY?: OverflowYProperty | OverflowYProperty[];
  overscrollBehavior?:
    | OverscrollBehaviorProperty
    | OverscrollBehaviorProperty[];
  overscrollBehaviorBlock?:
    | OverscrollBehaviorBlockProperty
    | OverscrollBehaviorBlockProperty[];
  overscrollBehaviorInline?:
    | OverscrollBehaviorInlineProperty
    | OverscrollBehaviorInlineProperty[];
  overscrollBehaviorX?:
    | OverscrollBehaviorXProperty
    | OverscrollBehaviorXProperty[];
  overscrollBehaviorY?:
    | OverscrollBehaviorYProperty
    | OverscrollBehaviorYProperty[];
  paddingBlock?:
    | PaddingBlockProperty<TLength>
    | PaddingBlockProperty<TLength>[];
  paddingBlockEnd?:
    | PaddingBlockEndProperty<TLength>
    | PaddingBlockEndProperty<TLength>[];
  paddingBlockStart?:
    | PaddingBlockStartProperty<TLength>
    | PaddingBlockStartProperty<TLength>[];
  paddingBottom?:
    | PaddingBottomProperty<TLength>
    | PaddingBottomProperty<TLength>[];
  paddingInline?:
    | PaddingInlineProperty<TLength>
    | PaddingInlineProperty<TLength>[];
  paddingInlineEnd?:
    | PaddingInlineEndProperty<TLength>
    | PaddingInlineEndProperty<TLength>[];
  paddingInlineStart?:
    | PaddingInlineStartProperty<TLength>
    | PaddingInlineStartProperty<TLength>[];
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  paddingRight?:
    | PaddingRightProperty<TLength>
    | PaddingRightProperty<TLength>[];
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[];
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[];
  paintOrder?: PaintOrderProperty | PaintOrderProperty[];
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  perspectiveOrigin?:
    | PerspectiveOriginProperty<TLength>
    | PerspectiveOriginProperty<TLength>[];
  placeContent?: PlaceContentProperty | PlaceContentProperty[];
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  position?: PositionProperty | PositionProperty[];
  quotes?: QuotesProperty | QuotesProperty[];
  resize?: ResizeProperty | ResizeProperty[];
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  rotate?: RotateProperty | RotateProperty[];
  rowGap?: RowGapProperty<TLength> | RowGapProperty<TLength>[];
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[];
  
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[];
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[];
  scale?: ScaleProperty | ScaleProperty[];
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  scrollMargin?:
    | ScrollMarginProperty<TLength>
    | ScrollMarginProperty<TLength>[];
  scrollMarginBlock?:
    | ScrollMarginBlockProperty<TLength>
    | ScrollMarginBlockProperty<TLength>[];
  scrollMarginBlockEnd?:
    | ScrollMarginBlockEndProperty<TLength>
    | ScrollMarginBlockEndProperty<TLength>[];
  scrollMarginBlockStart?:
    | ScrollMarginBlockStartProperty<TLength>
    | ScrollMarginBlockStartProperty<TLength>[];
  scrollMarginBottom?:
    | ScrollMarginBottomProperty<TLength>
    | ScrollMarginBottomProperty<TLength>[];
  scrollMarginInline?:
    | ScrollMarginInlineProperty<TLength>
    | ScrollMarginInlineProperty<TLength>[];
  scrollMarginInlineEnd?:
    | ScrollMarginInlineEndProperty<TLength>
    | ScrollMarginInlineEndProperty<TLength>[];
  scrollMarginInlineStart?:
    | ScrollMarginInlineStartProperty<TLength>
    | ScrollMarginInlineStartProperty<TLength>[];
  scrollMarginLeft?:
    | ScrollMarginLeftProperty<TLength>
    | ScrollMarginLeftProperty<TLength>[];
  scrollMarginRight?:
    | ScrollMarginRightProperty<TLength>
    | ScrollMarginRightProperty<TLength>[];
  scrollMarginTop?:
    | ScrollMarginTopProperty<TLength>
    | ScrollMarginTopProperty<TLength>[];
  scrollPadding?:
    | ScrollPaddingProperty<TLength>
    | ScrollPaddingProperty<TLength>[];
  scrollPaddingBlock?:
    | ScrollPaddingBlockProperty<TLength>
    | ScrollPaddingBlockProperty<TLength>[];
  scrollPaddingBlockEnd?:
    | ScrollPaddingBlockEndProperty<TLength>
    | ScrollPaddingBlockEndProperty<TLength>[];
  scrollPaddingBlockStart?:
    | ScrollPaddingBlockStartProperty<TLength>
    | ScrollPaddingBlockStartProperty<TLength>[];
  scrollPaddingBottom?:
    | ScrollPaddingBottomProperty<TLength>
    | ScrollPaddingBottomProperty<TLength>[];
  scrollPaddingInline?:
    | ScrollPaddingInlineProperty<TLength>
    | ScrollPaddingInlineProperty<TLength>[];
  scrollPaddingInlineEnd?:
    | ScrollPaddingInlineEndProperty<TLength>
    | ScrollPaddingInlineEndProperty<TLength>[];
  scrollPaddingInlineStart?:
    | ScrollPaddingInlineStartProperty<TLength>
    | ScrollPaddingInlineStartProperty<TLength>[];
  scrollPaddingLeft?:
    | ScrollPaddingLeftProperty<TLength>
    | ScrollPaddingLeftProperty<TLength>[];
  scrollPaddingRight?:
    | ScrollPaddingRightProperty<TLength>
    | ScrollPaddingRightProperty<TLength>[];
  scrollPaddingTop?:
    | ScrollPaddingTopProperty<TLength>
    | ScrollPaddingTopProperty<TLength>[];
  scrollSnapAlign?: ScrollSnapAlignProperty | ScrollSnapAlignProperty[];
  scrollSnapMargin?:
    | ScrollMarginProperty<TLength>
    | ScrollMarginProperty<TLength>[];
  scrollSnapMarginBottom?:
    | ScrollMarginBottomProperty<TLength>
    | ScrollMarginBottomProperty<TLength>[];
  scrollSnapMarginLeft?:
    | ScrollMarginLeftProperty<TLength>
    | ScrollMarginLeftProperty<TLength>[];
  scrollSnapMarginRight?:
    | ScrollMarginRightProperty<TLength>
    | ScrollMarginRightProperty<TLength>[];
  scrollSnapMarginTop?:
    | ScrollMarginTopProperty<TLength>
    | ScrollMarginTopProperty<TLength>[];
  scrollSnapStop?: ScrollSnapStopProperty | ScrollSnapStopProperty[];
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  scrollbarColor?: ScrollbarColorProperty | ScrollbarColorProperty[];
  scrollbarWidth?: ScrollbarWidthProperty | ScrollbarWidthProperty[];
  shapeImageThreshold?:
    | ShapeImageThresholdProperty
    | ShapeImageThresholdProperty[];
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  tableLayout?: TableLayoutProperty | TableLayoutProperty[];
  textAlign?: TextAlignProperty | TextAlignProperty[];
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  textCombineUpright?:
    | TextCombineUprightProperty
    | TextCombineUprightProperty[];
  textDecorationColor?:
    | TextDecorationColorProperty
    | TextDecorationColorProperty[];
  textDecorationLine?:
    | TextDecorationLineProperty
    | TextDecorationLineProperty[];
  textDecorationSkip?:
    | TextDecorationSkipProperty
    | TextDecorationSkipProperty[];
  textDecorationSkipInk?:
    | TextDecorationSkipInkProperty
    | TextDecorationSkipInkProperty[];
  textDecorationStyle?:
    | TextDecorationStyleProperty
    | TextDecorationStyleProperty[];
  textDecorationThickness?:
    | TextDecorationThicknessProperty<TLength>
    | TextDecorationThicknessProperty<TLength>[];
  textDecorationWidth?:
    | TextDecorationThicknessProperty<TLength>
    | TextDecorationThicknessProperty<TLength>[];
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  textEmphasisPosition?: GlobalsString | GlobalsString[];
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  textIndent?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  textJustify?: TextJustifyProperty | TextJustifyProperty[];
  textOrientation?: TextOrientationProperty | TextOrientationProperty[];
  textOverflow?: TextOverflowProperty | TextOverflowProperty[];
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  textShadow?: TextShadowProperty | TextShadowProperty[];
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  textTransform?: TextTransformProperty | TextTransformProperty[];
  textUnderlineOffset?:
    | TextUnderlineOffsetProperty<TLength>
    | TextUnderlineOffsetProperty<TLength>[];
  textUnderlinePosition?:
    | TextUnderlinePositionProperty
    | TextUnderlinePositionProperty[];
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  touchAction?: TouchActionProperty | TouchActionProperty[];
  transform?: TransformProperty | TransformProperty[];
  transformBox?: TransformBoxProperty | TransformBoxProperty[];
  transformOrigin?:
    | TransformOriginProperty<TLength>
    | TransformOriginProperty<TLength>[];
  transformStyle?: TransformStyleProperty | TransformStyleProperty[];
  transitionDelay?: GlobalsString | GlobalsString[];
  transitionDuration?: GlobalsString | GlobalsString[];
  transitionProperty?:
    | TransitionPropertyProperty
    | TransitionPropertyProperty[];
  transitionTimingFunction?:
    | TransitionTimingFunctionProperty
    | TransitionTimingFunctionProperty[];
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[];
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  userSelect?: UserSelectProperty | UserSelectProperty[];
  verticalAlign?:
    | VerticalAlignProperty<TLength>
    | VerticalAlignProperty<TLength>[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  widows?: GlobalsNumber | GlobalsNumber[];
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  willChange?: WillChangeProperty | WillChangeProperty[];
  wordBreak?: WordBreakProperty | WordBreakProperty[];
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  wordWrap?: WordWrapProperty | WordWrapProperty[];
  writingMode?: WritingModeProperty | WritingModeProperty[];
  zIndex?: ZIndexProperty | ZIndexProperty[];
  zoom?: ZoomProperty | ZoomProperty[];
}

export interface StandardShorthandPropertiesFallback<TLength = string | 0> {
  all?: Globals | Globals[];
  animation?: AnimationProperty | AnimationProperty[];
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  borderBlock?: BorderBlockProperty<TLength> | BorderBlockProperty<TLength>[];
  borderBlockEnd?:
    | BorderBlockEndProperty<TLength>
    | BorderBlockEndProperty<TLength>[];
  borderBlockStart?:
    | BorderBlockStartProperty<TLength>
    | BorderBlockStartProperty<TLength>[];
  borderBottom?:
    | BorderBottomProperty<TLength>
    | BorderBottomProperty<TLength>[];
  borderColor?: BorderColorProperty | BorderColorProperty[];
  borderImage?: BorderImageProperty | BorderImageProperty[];
  borderInline?:
    | BorderInlineProperty<TLength>
    | BorderInlineProperty<TLength>[];
  borderInlineEnd?:
    | BorderInlineEndProperty<TLength>
    | BorderInlineEndProperty<TLength>[];
  borderInlineStart?:
    | BorderInlineStartProperty<TLength>
    | BorderInlineStartProperty<TLength>[];
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  borderRadius?:
    | BorderRadiusProperty<TLength>
    | BorderRadiusProperty<TLength>[];
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  borderStyle?: BorderStyleProperty | BorderStyleProperty[];
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  columnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  flexFlow?: FlexFlowProperty | FlexFlowProperty[];
  font?: FontProperty | FontProperty[];
  gap?: GapProperty<TLength> | GapProperty<TLength>[];
  grid?: GridProperty | GridProperty[];
  gridArea?: GridAreaProperty | GridAreaProperty[];
  gridColumn?: GridColumnProperty | GridColumnProperty[];
  gridRow?: GridRowProperty | GridRowProperty[];
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[];
  
  lineClamp?: LineClampProperty | LineClampProperty[];
  listStyle?: ListStyleProperty | ListStyleProperty[];
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  maskBorder?: MaskBorderProperty | MaskBorderProperty[];
  motion?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  overflow?: OverflowProperty | OverflowProperty[];
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  placeItems?: PlaceItemsProperty | PlaceItemsProperty[];
  placeSelf?: PlaceSelfProperty | PlaceSelfProperty[];
  textDecoration?:
    | TextDecorationProperty<TLength>
    | TextDecorationProperty<TLength>[];
  textEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  transition?: TransitionProperty | TransitionProperty[];
}

export interface StandardPropertiesFallback<TLength = string | 0>
  extends
    StandardLonghandPropertiesFallback<TLength>,
    StandardShorthandPropertiesFallback<TLength> {}

export interface VendorLonghandPropertiesFallback<TLength = string | 0> {
  
  MozAnimationDelay?: GlobalsString | GlobalsString[];
  
  MozAnimationDirection?:
    | AnimationDirectionProperty
    | AnimationDirectionProperty[];
  
  MozAnimationDuration?: GlobalsString | GlobalsString[];
  
  MozAnimationFillMode?:
    | AnimationFillModeProperty
    | AnimationFillModeProperty[];
  
  MozAnimationIterationCount?:
    | AnimationIterationCountProperty
    | AnimationIterationCountProperty[];
  
  MozAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  
  MozAnimationPlayState?:
    | AnimationPlayStateProperty
    | AnimationPlayStateProperty[];
  
  MozAnimationTimingFunction?:
    | AnimationTimingFunctionProperty
    | AnimationTimingFunctionProperty[];
  
  MozAppearance?: MozAppearanceProperty | MozAppearanceProperty[];
  
  MozBackfaceVisibility?:
    | BackfaceVisibilityProperty
    | BackfaceVisibilityProperty[];
  
  MozBorderEndColor?:
    | BorderInlineEndColorProperty
    | BorderInlineEndColorProperty[];
  
  MozBorderEndStyle?:
    | BorderInlineEndStyleProperty
    | BorderInlineEndStyleProperty[];
  
  MozBorderEndWidth?:
    | BorderInlineEndWidthProperty<TLength>
    | BorderInlineEndWidthProperty<TLength>[];
  
  MozBorderStartColor?:
    | BorderInlineStartColorProperty
    | BorderInlineStartColorProperty[];
  
  MozBorderStartStyle?:
    | BorderInlineStartStyleProperty
    | BorderInlineStartStyleProperty[];
  
  MozBoxSizing?: BoxSizingProperty | BoxSizingProperty[];
  
  MozColumnCount?: ColumnCountProperty | ColumnCountProperty[];
  
  MozColumnFill?: ColumnFillProperty | ColumnFillProperty[];
  
  MozColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  
  MozColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  
  MozColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  
  MozColumnRuleWidth?:
    | ColumnRuleWidthProperty<TLength>
    | ColumnRuleWidthProperty<TLength>[];
  
  MozColumnWidth?:
    | ColumnWidthProperty<TLength>
    | ColumnWidthProperty<TLength>[];
  
  MozContextProperties?:
    | MozContextPropertiesProperty
    | MozContextPropertiesProperty[];
  
  MozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  
  MozFontFeatureSettings?:
    | FontFeatureSettingsProperty
    | FontFeatureSettingsProperty[];
  
  MozFontLanguageOverride?:
    | FontLanguageOverrideProperty
    | FontLanguageOverrideProperty[];
  
  MozForceBrokenImageIcon?: GlobalsNumber | GlobalsNumber[];
  
  MozHyphens?: HyphensProperty | HyphensProperty[];
  
  MozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[];
  
  MozMarginEnd?:
    | MarginInlineEndProperty<TLength>
    | MarginInlineEndProperty<TLength>[];
  
  MozMarginStart?:
    | MarginInlineStartProperty<TLength>
    | MarginInlineStartProperty<TLength>[];
  
  MozOrient?: MozOrientProperty | MozOrientProperty[];
  
  MozOutlineRadiusBottomleft?:
    | MozOutlineRadiusBottomleftProperty<TLength>
    | MozOutlineRadiusBottomleftProperty<TLength>[];
  
  MozOutlineRadiusBottomright?:
    | MozOutlineRadiusBottomrightProperty<TLength>
    | MozOutlineRadiusBottomrightProperty<TLength>[];
  
  MozOutlineRadiusTopleft?:
    | MozOutlineRadiusTopleftProperty<TLength>
    | MozOutlineRadiusTopleftProperty<TLength>[];
  
  MozOutlineRadiusTopright?:
    | MozOutlineRadiusToprightProperty<TLength>
    | MozOutlineRadiusToprightProperty<TLength>[];
  
  MozPaddingEnd?:
    | PaddingInlineEndProperty<TLength>
    | PaddingInlineEndProperty<TLength>[];
  
  MozPaddingStart?:
    | PaddingInlineStartProperty<TLength>
    | PaddingInlineStartProperty<TLength>[];
  
  MozPerspective?:
    | PerspectiveProperty<TLength>
    | PerspectiveProperty<TLength>[];
  
  MozPerspectiveOrigin?:
    | PerspectiveOriginProperty<TLength>
    | PerspectiveOriginProperty<TLength>[];
  
  MozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[];
  
  MozTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  
  MozTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  
  MozTransformOrigin?:
    | TransformOriginProperty<TLength>
    | TransformOriginProperty<TLength>[];
  
  MozTransformStyle?: TransformStyleProperty | TransformStyleProperty[];
  
  MozTransitionDelay?: GlobalsString | GlobalsString[];
  
  MozTransitionDuration?: GlobalsString | GlobalsString[];
  
  MozTransitionProperty?:
    | TransitionPropertyProperty
    | TransitionPropertyProperty[];
  
  MozTransitionTimingFunction?:
    | TransitionTimingFunctionProperty
    | TransitionTimingFunctionProperty[];
  
  MozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[];
  
  MozUserModify?: MozUserModifyProperty | MozUserModifyProperty[];
  
  MozUserSelect?: UserSelectProperty | UserSelectProperty[];
  
  MozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  
  msAccelerator?: MsAcceleratorProperty | MsAcceleratorProperty[];
  
  msAlignSelf?: AlignSelfProperty | AlignSelfProperty[];
  
  msBlockProgression?:
    | MsBlockProgressionProperty
    | MsBlockProgressionProperty[];
  
  msContentZoomChaining?:
    | MsContentZoomChainingProperty
    | MsContentZoomChainingProperty[];
  
  msContentZoomLimitMax?: GlobalsString | GlobalsString[];
  
  msContentZoomLimitMin?: GlobalsString | GlobalsString[];
  
  msContentZoomSnapPoints?: GlobalsString | GlobalsString[];
  
  msContentZoomSnapType?:
    | MsContentZoomSnapTypeProperty
    | MsContentZoomSnapTypeProperty[];
  
  msContentZooming?: MsContentZoomingProperty | MsContentZoomingProperty[];
  
  msFilter?: GlobalsString | GlobalsString[];
  
  msFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  
  msFlexPositive?: GlobalsNumber | GlobalsNumber[];
  
  msFlowFrom?: MsFlowFromProperty | MsFlowFromProperty[];
  
  msFlowInto?: MsFlowIntoProperty | MsFlowIntoProperty[];
  
  msGridColumns?:
    | GridAutoColumnsProperty<TLength>
    | GridAutoColumnsProperty<TLength>[];
  
  msGridRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  
  msHighContrastAdjust?:
    | MsHighContrastAdjustProperty
    | MsHighContrastAdjustProperty[];
  
  msHyphenateLimitChars?:
    | MsHyphenateLimitCharsProperty
    | MsHyphenateLimitCharsProperty[];
  
  msHyphenateLimitLines?:
    | MsHyphenateLimitLinesProperty
    | MsHyphenateLimitLinesProperty[];
  
  msHyphenateLimitZone?:
    | MsHyphenateLimitZoneProperty<TLength>
    | MsHyphenateLimitZoneProperty<TLength>[];
  
  msHyphens?: HyphensProperty | HyphensProperty[];
  
  msImeAlign?: MsImeAlignProperty | MsImeAlignProperty[];
  
  msLineBreak?: LineBreakProperty | LineBreakProperty[];
  
  msOrder?: GlobalsNumber | GlobalsNumber[];
  
  msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  
  msOverflowX?: OverflowXProperty | OverflowXProperty[];
  
  msOverflowY?: OverflowYProperty | OverflowYProperty[];
  
  msScrollChaining?: MsScrollChainingProperty | MsScrollChainingProperty[];
  
  msScrollLimitXMax?:
    | MsScrollLimitXMaxProperty<TLength>
    | MsScrollLimitXMaxProperty<TLength>[];
  
  msScrollLimitXMin?:
    | MsScrollLimitXMinProperty<TLength>
    | MsScrollLimitXMinProperty<TLength>[];
  
  msScrollLimitYMax?:
    | MsScrollLimitYMaxProperty<TLength>
    | MsScrollLimitYMaxProperty<TLength>[];
  
  msScrollLimitYMin?:
    | MsScrollLimitYMinProperty<TLength>
    | MsScrollLimitYMinProperty<TLength>[];
  
  msScrollRails?: MsScrollRailsProperty | MsScrollRailsProperty[];
  
  msScrollSnapPointsX?: GlobalsString | GlobalsString[];
  
  msScrollSnapPointsY?: GlobalsString | GlobalsString[];
  
  msScrollSnapType?: MsScrollSnapTypeProperty | MsScrollSnapTypeProperty[];
  
  msScrollTranslation?:
    | MsScrollTranslationProperty
    | MsScrollTranslationProperty[];
  
  msScrollbar3dlightColor?:
    | MsScrollbar3dlightColorProperty
    | MsScrollbar3dlightColorProperty[];
  
  msScrollbarArrowColor?:
    | MsScrollbarArrowColorProperty
    | MsScrollbarArrowColorProperty[];
  
  msScrollbarBaseColor?:
    | MsScrollbarBaseColorProperty
    | MsScrollbarBaseColorProperty[];
  
  msScrollbarDarkshadowColor?:
    | MsScrollbarDarkshadowColorProperty
    | MsScrollbarDarkshadowColorProperty[];
  
  msScrollbarFaceColor?:
    | MsScrollbarFaceColorProperty
    | MsScrollbarFaceColorProperty[];
  
  msScrollbarHighlightColor?:
    | MsScrollbarHighlightColorProperty
    | MsScrollbarHighlightColorProperty[];
  
  msScrollbarShadowColor?:
    | MsScrollbarShadowColorProperty
    | MsScrollbarShadowColorProperty[];
  
  msTextAutospace?: MsTextAutospaceProperty | MsTextAutospaceProperty[];
  
  msTextCombineHorizontal?:
    | TextCombineUprightProperty
    | TextCombineUprightProperty[];
  
  msTextOverflow?: TextOverflowProperty | TextOverflowProperty[];
  
  msTouchAction?: TouchActionProperty | TouchActionProperty[];
  
  msTouchSelect?: MsTouchSelectProperty | MsTouchSelectProperty[];
  
  msTransform?: TransformProperty | TransformProperty[];
  
  msTransformOrigin?:
    | TransformOriginProperty<TLength>
    | TransformOriginProperty<TLength>[];
  
  msTransitionDelay?: GlobalsString | GlobalsString[];
  
  msTransitionDuration?: GlobalsString | GlobalsString[];
  
  msTransitionProperty?:
    | TransitionPropertyProperty
    | TransitionPropertyProperty[];
  
  msTransitionTimingFunction?:
    | TransitionTimingFunctionProperty
    | TransitionTimingFunctionProperty[];
  
  msUserSelect?: MsUserSelectProperty | MsUserSelectProperty[];
  
  msWordBreak?: WordBreakProperty | WordBreakProperty[];
  
  msWrapFlow?: MsWrapFlowProperty | MsWrapFlowProperty[];
  
  msWrapMargin?:
    | MsWrapMarginProperty<TLength>
    | MsWrapMarginProperty<TLength>[];
  
  msWrapThrough?: MsWrapThroughProperty | MsWrapThroughProperty[];
  
  msWritingMode?: WritingModeProperty | WritingModeProperty[];
  
  OObjectFit?: ObjectFitProperty | ObjectFitProperty[];
  
  OObjectPosition?:
    | ObjectPositionProperty<TLength>
    | ObjectPositionProperty<TLength>[];
  
  OTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  
  OTextOverflow?: TextOverflowProperty | TextOverflowProperty[];
  
  OTransformOrigin?:
    | TransformOriginProperty<TLength>
    | TransformOriginProperty<TLength>[];
  
  WebkitAlignContent?: AlignContentProperty | AlignContentProperty[];
  
  WebkitAlignItems?: AlignItemsProperty | AlignItemsProperty[];
  
  WebkitAlignSelf?: AlignSelfProperty | AlignSelfProperty[];
  
  WebkitAnimationDelay?: GlobalsString | GlobalsString[];
  
  WebkitAnimationDirection?:
    | AnimationDirectionProperty
    | AnimationDirectionProperty[];
  
  WebkitAnimationDuration?: GlobalsString | GlobalsString[];
  
  WebkitAnimationFillMode?:
    | AnimationFillModeProperty
    | AnimationFillModeProperty[];
  
  WebkitAnimationIterationCount?:
    | AnimationIterationCountProperty
    | AnimationIterationCountProperty[];
  
  WebkitAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  
  WebkitAnimationPlayState?:
    | AnimationPlayStateProperty
    | AnimationPlayStateProperty[];
  
  WebkitAnimationTimingFunction?:
    | AnimationTimingFunctionProperty
    | AnimationTimingFunctionProperty[];
  
  WebkitAppearance?: WebkitAppearanceProperty | WebkitAppearanceProperty[];
  
  WebkitBackdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  
  WebkitBackfaceVisibility?:
    | BackfaceVisibilityProperty
    | BackfaceVisibilityProperty[];
  
  WebkitBackgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  
  WebkitBackgroundOrigin?:
    | BackgroundOriginProperty
    | BackgroundOriginProperty[];
  
  WebkitBackgroundSize?:
    | BackgroundSizeProperty<TLength>
    | BackgroundSizeProperty<TLength>[];
  
  WebkitBorderBeforeColor?:
    | WebkitBorderBeforeColorProperty
    | WebkitBorderBeforeColorProperty[];
  
  WebkitBorderBeforeStyle?:
    | WebkitBorderBeforeStyleProperty
    | WebkitBorderBeforeStyleProperty[];
  
  WebkitBorderBeforeWidth?:
    | WebkitBorderBeforeWidthProperty<TLength>
    | WebkitBorderBeforeWidthProperty<TLength>[];
  
  WebkitBorderBottomLeftRadius?:
    | BorderBottomLeftRadiusProperty<TLength>
    | BorderBottomLeftRadiusProperty<TLength>[];
  
  WebkitBorderBottomRightRadius?:
    | BorderBottomRightRadiusProperty<TLength>
    | BorderBottomRightRadiusProperty<TLength>[];
  
  WebkitBorderImageSlice?:
    | BorderImageSliceProperty
    | BorderImageSliceProperty[];
  
  WebkitBorderTopLeftRadius?:
    | BorderTopLeftRadiusProperty<TLength>
    | BorderTopLeftRadiusProperty<TLength>[];
  
  WebkitBorderTopRightRadius?:
    | BorderTopRightRadiusProperty<TLength>
    | BorderTopRightRadiusProperty<TLength>[];
  
  WebkitBoxDecorationBreak?:
    | BoxDecorationBreakProperty
    | BoxDecorationBreakProperty[];
  
  WebkitBoxReflect?:
    | WebkitBoxReflectProperty<TLength>
    | WebkitBoxReflectProperty<TLength>[];
  
  WebkitBoxShadow?: BoxShadowProperty | BoxShadowProperty[];
  
  WebkitBoxSizing?: BoxSizingProperty | BoxSizingProperty[];
  
  WebkitClipPath?: ClipPathProperty | ClipPathProperty[];
  
  WebkitColorAdjust?: ColorAdjustProperty | ColorAdjustProperty[];
  
  WebkitColumnCount?: ColumnCountProperty | ColumnCountProperty[];
  
  WebkitColumnFill?: ColumnFillProperty | ColumnFillProperty[];
  
  WebkitColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  
  WebkitColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  
  WebkitColumnRuleWidth?:
    | ColumnRuleWidthProperty<TLength>
    | ColumnRuleWidthProperty<TLength>[];
  
  WebkitColumnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  
  WebkitColumnWidth?:
    | ColumnWidthProperty<TLength>
    | ColumnWidthProperty<TLength>[];
  
  WebkitFilter?: FilterProperty | FilterProperty[];
  
  WebkitFlexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  
  WebkitFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  
  WebkitFlexGrow?: GlobalsNumber | GlobalsNumber[];
  
  WebkitFlexShrink?: GlobalsNumber | GlobalsNumber[];
  
  WebkitFlexWrap?: FlexWrapProperty | FlexWrapProperty[];
  
  WebkitFontFeatureSettings?:
    | FontFeatureSettingsProperty
    | FontFeatureSettingsProperty[];
  
  WebkitFontKerning?: FontKerningProperty | FontKerningProperty[];
  
  WebkitFontVariantLigatures?:
    | FontVariantLigaturesProperty
    | FontVariantLigaturesProperty[];
  
  WebkitHyphens?: HyphensProperty | HyphensProperty[];
  
  WebkitJustifyContent?: JustifyContentProperty | JustifyContentProperty[];
  
  WebkitLineBreak?: LineBreakProperty | LineBreakProperty[];
  
  WebkitLineClamp?: WebkitLineClampProperty | WebkitLineClampProperty[];
  
  WebkitMarginEnd?:
    | MarginInlineEndProperty<TLength>
    | MarginInlineEndProperty<TLength>[];
  
  WebkitMarginStart?:
    | MarginInlineStartProperty<TLength>
    | MarginInlineStartProperty<TLength>[];
  
  WebkitMaskAttachment?:
    | WebkitMaskAttachmentProperty
    | WebkitMaskAttachmentProperty[];
  
  WebkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  
  WebkitMaskComposite?:
    | WebkitMaskCompositeProperty
    | WebkitMaskCompositeProperty[];
  
  WebkitMaskImage?: WebkitMaskImageProperty | WebkitMaskImageProperty[];
  
  WebkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  
  WebkitMaskPosition?:
    | WebkitMaskPositionProperty<TLength>
    | WebkitMaskPositionProperty<TLength>[];
  
  WebkitMaskPositionX?:
    | WebkitMaskPositionXProperty<TLength>
    | WebkitMaskPositionXProperty<TLength>[];
  
  WebkitMaskPositionY?:
    | WebkitMaskPositionYProperty<TLength>
    | WebkitMaskPositionYProperty<TLength>[];
  
  WebkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  
  WebkitMaskSize?:
    | WebkitMaskSizeProperty<TLength>
    | WebkitMaskSizeProperty<TLength>[];
  
  WebkitMaxInlineSize?:
    | MaxInlineSizeProperty<TLength>
    | MaxInlineSizeProperty<TLength>[];
  
  WebkitOrder?: GlobalsNumber | GlobalsNumber[];
  
  WebkitOverflowScrolling?:
    | WebkitOverflowScrollingProperty
    | WebkitOverflowScrollingProperty[];
  
  WebkitPaddingEnd?:
    | PaddingInlineEndProperty<TLength>
    | PaddingInlineEndProperty<TLength>[];
  
  WebkitPaddingStart?:
    | PaddingInlineStartProperty<TLength>
    | PaddingInlineStartProperty<TLength>[];
  
  WebkitPerspective?:
    | PerspectiveProperty<TLength>
    | PerspectiveProperty<TLength>[];
  
  WebkitPerspectiveOrigin?:
    | PerspectiveOriginProperty<TLength>
    | PerspectiveOriginProperty<TLength>[];
  
  WebkitScrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  
  WebkitShapeMargin?:
    | ShapeMarginProperty<TLength>
    | ShapeMarginProperty<TLength>[];
  
  WebkitTapHighlightColor?:
    | WebkitTapHighlightColorProperty
    | WebkitTapHighlightColorProperty[];
  
  WebkitTextCombine?: TextCombineUprightProperty | TextCombineUprightProperty[];
  
  WebkitTextDecorationColor?:
    | TextDecorationColorProperty
    | TextDecorationColorProperty[];
  
  WebkitTextDecorationLine?:
    | TextDecorationLineProperty
    | TextDecorationLineProperty[];
  
  WebkitTextDecorationSkip?:
    | TextDecorationSkipProperty
    | TextDecorationSkipProperty[];
  
  WebkitTextDecorationStyle?:
    | TextDecorationStyleProperty
    | TextDecorationStyleProperty[];
  
  WebkitTextEmphasisColor?:
    | TextEmphasisColorProperty
    | TextEmphasisColorProperty[];
  
  WebkitTextEmphasisPosition?: GlobalsString | GlobalsString[];
  
  WebkitTextEmphasisStyle?:
    | TextEmphasisStyleProperty
    | TextEmphasisStyleProperty[];
  
  WebkitTextFillColor?:
    | WebkitTextFillColorProperty
    | WebkitTextFillColorProperty[];
  
  WebkitTextOrientation?: TextOrientationProperty | TextOrientationProperty[];
  
  WebkitTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  
  WebkitTextStrokeColor?:
    | WebkitTextStrokeColorProperty
    | WebkitTextStrokeColorProperty[];
  
  WebkitTextStrokeWidth?:
    | WebkitTextStrokeWidthProperty<TLength>
    | WebkitTextStrokeWidthProperty<TLength>[];
  
  WebkitTouchCallout?:
    | WebkitTouchCalloutProperty
    | WebkitTouchCalloutProperty[];
  
  WebkitTransform?: TransformProperty | TransformProperty[];
  
  WebkitTransformOrigin?:
    | TransformOriginProperty<TLength>
    | TransformOriginProperty<TLength>[];
  
  WebkitTransformStyle?: TransformStyleProperty | TransformStyleProperty[];
  
  WebkitTransitionDelay?: GlobalsString | GlobalsString[];
  
  WebkitTransitionDuration?: GlobalsString | GlobalsString[];
  
  WebkitTransitionProperty?:
    | TransitionPropertyProperty
    | TransitionPropertyProperty[];
  
  WebkitTransitionTimingFunction?:
    | TransitionTimingFunctionProperty
    | TransitionTimingFunctionProperty[];
  
  WebkitUserModify?: WebkitUserModifyProperty | WebkitUserModifyProperty[];
  
  WebkitUserSelect?: UserSelectProperty | UserSelectProperty[];
  
  WebkitWritingMode?: WritingModeProperty | WritingModeProperty[];
  
  WebkittextUnderlinePosition?:
    | TextUnderlinePositionProperty
    | TextUnderlinePositionProperty[];
}

export interface VendorShorthandPropertiesFallback<TLength = string | 0> {
  
  MozAnimation?: AnimationProperty | AnimationProperty[];
  MozBorderImage?: BorderImageProperty | BorderImageProperty[];
  
  MozColumnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  
  MozColumns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  
  MozTransition?: TransitionProperty | TransitionProperty[];
  
  msContentZoomLimit?: GlobalsString | GlobalsString[];
  
  msContentZoomSnap?: MsContentZoomSnapProperty | MsContentZoomSnapProperty[];
  
  msFlex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  
  msScrollLimit?: GlobalsString | GlobalsString[];
  
  msScrollSnapX?: GlobalsString | GlobalsString[];
  
  msScrollSnapY?: GlobalsString | GlobalsString[];
  
  msTransition?: TransitionProperty | TransitionProperty[];
  
  WebkitAnimation?: AnimationProperty | AnimationProperty[];
  
  WebkitBorderBefore?:
    | WebkitBorderBeforeProperty<TLength>
    | WebkitBorderBeforeProperty<TLength>[];
  WebkitBorderImage?: BorderImageProperty | BorderImageProperty[];
  WebkitBorderRadius?:
    | BorderRadiusProperty<TLength>
    | BorderRadiusProperty<TLength>[];
  
  WebkitColumnRule?:
    | ColumnRuleProperty<TLength>
    | ColumnRuleProperty<TLength>[];
  
  WebkitColumns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  
  WebkitFlex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  
  WebkitFlexFlow?: FlexFlowProperty | FlexFlowProperty[];
  WebkitMask?: WebkitMaskProperty<TLength> | WebkitMaskProperty<TLength>[];
  
  WebkitTextEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  
  WebkitTextStroke?:
    | WebkitTextStrokeProperty<TLength>
    | WebkitTextStrokeProperty<TLength>[];
  
  WebkitTransition?: TransitionProperty | TransitionProperty[];
}

export interface VendorPropertiesFallback<TLength = string | 0>
  extends
    VendorLonghandPropertiesFallback<TLength>,
    VendorShorthandPropertiesFallback<TLength> {}

export interface ObsoletePropertiesFallback<TLength = string | 0> {
  
  boxAlign?: BoxAlignProperty | BoxAlignProperty[];
  
  boxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  
  boxFlex?: GlobalsNumber | GlobalsNumber[];
  
  boxFlexGroup?: GlobalsNumber | GlobalsNumber[];
  
  boxLines?: BoxLinesProperty | BoxLinesProperty[];
  
  boxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  
  boxOrient?: BoxOrientProperty | BoxOrientProperty[];
  
  boxPack?: BoxPackProperty | BoxPackProperty[];
  
  clip?: ClipProperty | ClipProperty[];
  
  fontVariantAlternates?:
    | FontVariantAlternatesProperty
    | FontVariantAlternatesProperty[];
  
  gridColumnGap?:
    | GridColumnGapProperty<TLength>
    | GridColumnGapProperty<TLength>[];
  
  gridGap?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  
  gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  
  imeMode?: ImeModeProperty | ImeModeProperty[];
  
  offsetBlock?: InsetBlockProperty<TLength> | InsetBlockProperty<TLength>[];
  
  offsetBlockEnd?:
    | InsetBlockEndProperty<TLength>
    | InsetBlockEndProperty<TLength>[];
  
  offsetBlockStart?:
    | InsetBlockStartProperty<TLength>
    | InsetBlockStartProperty<TLength>[];
  
  offsetInline?: InsetInlineProperty<TLength> | InsetInlineProperty<TLength>[];
  
  offsetInlineEnd?:
    | InsetInlineEndProperty<TLength>
    | InsetInlineEndProperty<TLength>[];
  
  offsetInlineStart?:
    | InsetInlineStartProperty<TLength>
    | InsetInlineStartProperty<TLength>[];
  
  scrollSnapCoordinate?:
    | ScrollSnapCoordinateProperty<TLength>
    | ScrollSnapCoordinateProperty<TLength>[];
  
  scrollSnapDestination?:
    | ScrollSnapDestinationProperty<TLength>
    | ScrollSnapDestinationProperty<TLength>[];
  
  scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  
  scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  
  scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  
  scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  
  scrollbarTrackColor?:
    | MsScrollbarTrackColorProperty
    | MsScrollbarTrackColorProperty[];
  
  textCombineHorizontal?:
    | TextCombineUprightProperty
    | TextCombineUprightProperty[];
  
  KhtmlBoxAlign?: BoxAlignProperty | BoxAlignProperty[];
  
  KhtmlBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  
  KhtmlBoxFlex?: GlobalsNumber | GlobalsNumber[];
  
  KhtmlBoxFlexGroup?: GlobalsNumber | GlobalsNumber[];
  
  KhtmlBoxLines?: BoxLinesProperty | BoxLinesProperty[];
  
  KhtmlBoxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  
  KhtmlBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  
  KhtmlBoxPack?: BoxPackProperty | BoxPackProperty[];
  
  KhtmlLineBreak?: LineBreakProperty | LineBreakProperty[];
  
  KhtmlOpacity?: OpacityProperty | OpacityProperty[];
  
  KhtmlUserSelect?: UserSelectProperty | UserSelectProperty[];
  
  MozBackgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  
  MozBackgroundInlinePolicy?:
    | BoxDecorationBreakProperty
    | BoxDecorationBreakProperty[];
  
  MozBackgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  
  MozBackgroundSize?:
    | BackgroundSizeProperty<TLength>
    | BackgroundSizeProperty<TLength>[];
  
  MozBinding?: MozBindingProperty | MozBindingProperty[];
  
  MozBorderBottomColors?:
    | MozBorderBottomColorsProperty
    | MozBorderBottomColorsProperty[];
  
  MozBorderLeftColors?:
    | MozBorderLeftColorsProperty
    | MozBorderLeftColorsProperty[];
  MozBorderRadius?:
    | BorderRadiusProperty<TLength>
    | BorderRadiusProperty<TLength>[];
  
  MozBorderRadiusBottomleft?:
    | BorderBottomLeftRadiusProperty<TLength>
    | BorderBottomLeftRadiusProperty<TLength>[];
  
  MozBorderRadiusBottomright?:
    | BorderBottomRightRadiusProperty<TLength>
    | BorderBottomRightRadiusProperty<TLength>[];
  
  MozBorderRadiusTopleft?:
    | BorderTopLeftRadiusProperty<TLength>
    | BorderTopLeftRadiusProperty<TLength>[];
  
  MozBorderRadiusTopright?:
    | BorderTopRightRadiusProperty<TLength>
    | BorderTopRightRadiusProperty<TLength>[];
  
  MozBorderRightColors?:
    | MozBorderRightColorsProperty
    | MozBorderRightColorsProperty[];
  
  MozBorderTopColors?:
    | MozBorderTopColorsProperty
    | MozBorderTopColorsProperty[];
  
  MozBoxAlign?: BoxAlignProperty | BoxAlignProperty[];
  
  MozBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  
  MozBoxFlex?: GlobalsNumber | GlobalsNumber[];
  
  MozBoxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  
  MozBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  
  MozBoxPack?: BoxPackProperty | BoxPackProperty[];
  
  MozBoxShadow?: BoxShadowProperty | BoxShadowProperty[];
  
  MozOpacity?: OpacityProperty | OpacityProperty[];
  
  MozOutline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  
  MozOutlineColor?: OutlineColorProperty | OutlineColorProperty[];
  MozOutlineRadius?:
    | MozOutlineRadiusProperty<TLength>
    | MozOutlineRadiusProperty<TLength>[];
  
  MozOutlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  
  MozOutlineWidth?:
    | OutlineWidthProperty<TLength>
    | OutlineWidthProperty<TLength>[];
  
  MozTextAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  
  MozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[];
  
  MozTextDecorationColor?:
    | TextDecorationColorProperty
    | TextDecorationColorProperty[];
  
  MozTextDecorationLine?:
    | TextDecorationLineProperty
    | TextDecorationLineProperty[];
  
  MozTextDecorationStyle?:
    | TextDecorationStyleProperty
    | TextDecorationStyleProperty[];
  
  MozUserInput?: MozUserInputProperty | MozUserInputProperty[];
  
  MozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[];
  
  msImeMode?: ImeModeProperty | ImeModeProperty[];
  
  msScrollbarTrackColor?:
    | MsScrollbarTrackColorProperty
    | MsScrollbarTrackColorProperty[];
  
  OAnimation?: AnimationProperty | AnimationProperty[];
  
  OAnimationDelay?: GlobalsString | GlobalsString[];
  
  OAnimationDirection?:
    | AnimationDirectionProperty
    | AnimationDirectionProperty[];
  
  OAnimationDuration?: GlobalsString | GlobalsString[];
  
  OAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  
  OAnimationIterationCount?:
    | AnimationIterationCountProperty
    | AnimationIterationCountProperty[];
  
  OAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  
  OAnimationPlayState?:
    | AnimationPlayStateProperty
    | AnimationPlayStateProperty[];
  
  OAnimationTimingFunction?:
    | AnimationTimingFunctionProperty
    | AnimationTimingFunctionProperty[];
  
  OBackgroundSize?:
    | BackgroundSizeProperty<TLength>
    | BackgroundSizeProperty<TLength>[];
  OBorderImage?: BorderImageProperty | BorderImageProperty[];
  
  OTransform?: TransformProperty | TransformProperty[];
  
  OTransition?: TransitionProperty | TransitionProperty[];
  
  OTransitionDelay?: GlobalsString | GlobalsString[];
  
  OTransitionDuration?: GlobalsString | GlobalsString[];
  
  OTransitionProperty?:
    | TransitionPropertyProperty
    | TransitionPropertyProperty[];
  
  OTransitionTimingFunction?:
    | TransitionTimingFunctionProperty
    | TransitionTimingFunctionProperty[];
  
  WebkitBoxAlign?: BoxAlignProperty | BoxAlignProperty[];
  
  WebkitBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  
  WebkitBoxFlex?: GlobalsNumber | GlobalsNumber[];
  
  WebkitBoxFlexGroup?: GlobalsNumber | GlobalsNumber[];
  
  WebkitBoxLines?: BoxLinesProperty | BoxLinesProperty[];
  
  WebkitBoxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  
  WebkitBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  
  WebkitBoxPack?: BoxPackProperty | BoxPackProperty[];
  
  WebkitScrollSnapPointsX?:
    | ScrollSnapPointsXProperty
    | ScrollSnapPointsXProperty[];
  
  WebkitScrollSnapPointsY?:
    | ScrollSnapPointsYProperty
    | ScrollSnapPointsYProperty[];
}

export interface SvgPropertiesFallback<TLength = string | 0> {
  alignmentBaseline?: AlignmentBaselineProperty | AlignmentBaselineProperty[];
  baselineShift?:
    | BaselineShiftProperty<TLength>
    | BaselineShiftProperty<TLength>[];
  clip?: ClipProperty | ClipProperty[];
  clipPath?: ClipPathProperty | ClipPathProperty[];
  clipRule?: ClipRuleProperty | ClipRuleProperty[];
  color?: ColorProperty | ColorProperty[];
  colorInterpolation?:
    | ColorInterpolationProperty
    | ColorInterpolationProperty[];
  colorRendering?: ColorRenderingProperty | ColorRenderingProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  dominantBaseline?: DominantBaselineProperty | DominantBaselineProperty[];
  fill?: FillProperty | FillProperty[];
  fillOpacity?: GlobalsNumber | GlobalsNumber[];
  fillRule?: FillRuleProperty | FillRuleProperty[];
  filter?: FilterProperty | FilterProperty[];
  floodColor?: FloodColorProperty | FloodColorProperty[];
  floodOpacity?: GlobalsNumber | GlobalsNumber[];
  font?: FontProperty | FontProperty[];
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  glyphOrientationVertical?:
    | GlyphOrientationVerticalProperty
    | GlyphOrientationVerticalProperty[];
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  letterSpacing?:
    | LetterSpacingProperty<TLength>
    | LetterSpacingProperty<TLength>[];
  lightingColor?: LightingColorProperty | LightingColorProperty[];
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  marker?: MarkerProperty | MarkerProperty[];
  markerEnd?: MarkerEndProperty | MarkerEndProperty[];
  markerMid?: MarkerMidProperty | MarkerMidProperty[];
  markerStart?: MarkerStartProperty | MarkerStartProperty[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  opacity?: OpacityProperty | OpacityProperty[];
  overflow?: OverflowProperty | OverflowProperty[];
  paintOrder?: PaintOrderProperty | PaintOrderProperty[];
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  shapeRendering?: ShapeRenderingProperty | ShapeRenderingProperty[];
  stopColor?: StopColorProperty | StopColorProperty[];
  stopOpacity?: GlobalsNumber | GlobalsNumber[];
  stroke?: StrokeProperty | StrokeProperty[];
  strokeDasharray?:
    | StrokeDasharrayProperty<TLength>
    | StrokeDasharrayProperty<TLength>[];
  strokeDashoffset?:
    | StrokeDashoffsetProperty<TLength>
    | StrokeDashoffsetProperty<TLength>[];
  strokeLinecap?: StrokeLinecapProperty | StrokeLinecapProperty[];
  strokeLinejoin?: StrokeLinejoinProperty | StrokeLinejoinProperty[];
  strokeMiterlimit?: GlobalsNumber | GlobalsNumber[];
  strokeOpacity?: GlobalsNumber | GlobalsNumber[];
  strokeWidth?: StrokeWidthProperty<TLength> | StrokeWidthProperty<TLength>[];
  textAnchor?: TextAnchorProperty | TextAnchorProperty[];
  textDecoration?:
    | TextDecorationProperty<TLength>
    | TextDecorationProperty<TLength>[];
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  vectorEffect?: VectorEffectProperty | VectorEffectProperty[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  writingMode?: WritingModeProperty | WritingModeProperty[];
}

export interface PropertiesFallback<TLength = string | 0>
  extends
    StandardPropertiesFallback<TLength>,
    VendorPropertiesFallback<TLength>,
    ObsoletePropertiesFallback<TLength>,
    SvgPropertiesFallback<TLength> {}

export interface CounterStyle {
  additiveSymbols?: string;
  fallback?: string;
  negative?: string;
  pad?: string;
  prefix?: string;
  range?: CounterStyleRangeProperty;
  speakAs?: CounterStyleSpeakAsProperty;
  suffix?: string;
  symbols?: string;
  system?: CounterStyleSystemProperty;
}

export interface CounterStyleFallback {
  additiveSymbols?: string | string[];
  fallback?: string | string[];
  negative?: string | string[];
  pad?: string | string[];
  prefix?: string | string[];
  range?: CounterStyleRangeProperty | CounterStyleRangeProperty[];
  speakAs?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[];
  suffix?: string | string[];
  symbols?: string | string[];
  system?: CounterStyleSystemProperty | CounterStyleSystemProperty[];
}

export interface FontFace {
  MozFontFeatureSettings?: FontFaceFontFeatureSettingsProperty;
  fontDisplay?: FontFaceFontDisplayProperty;
  fontFamily?: string;
  fontFeatureSettings?: FontFaceFontFeatureSettingsProperty;
  fontStretch?: FontFaceFontStretchProperty;
  fontStyle?: FontFaceFontStyleProperty;
  fontVariant?: FontFaceFontVariantProperty;
  fontVariationSettings?: FontFaceFontVariationSettingsProperty;
  fontWeight?: FontFaceFontWeightProperty;
  src?: string;
  unicodeRange?: string;
}

export interface FontFaceHyphen {
  "-moz-font-feature-settings"?: FontFaceFontFeatureSettingsProperty;
  "font-display"?: FontFaceFontDisplayProperty;
  "font-family"?: string;
  "font-feature-settings"?: FontFaceFontFeatureSettingsProperty;
  "font-stretch"?: FontFaceFontStretchProperty;
  "font-style"?: FontFaceFontStyleProperty;
  "font-variant"?: FontFaceFontVariantProperty;
  "font-variation-settings"?: FontFaceFontVariationSettingsProperty;
  "font-weight"?: FontFaceFontWeightProperty;
  src?: string;
  "unicode-range"?: string;
}

export interface FontFaceFallback {
  MozFontFeatureSettings?:
    | FontFaceFontFeatureSettingsProperty
    | FontFaceFontFeatureSettingsProperty[];
  fontDisplay?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[];
  fontFamily?: string | string[];
  fontFeatureSettings?:
    | FontFaceFontFeatureSettingsProperty
    | FontFaceFontFeatureSettingsProperty[];
  fontStretch?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[];
  fontStyle?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[];
  fontVariant?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[];
  fontVariationSettings?:
    | FontFaceFontVariationSettingsProperty
    | FontFaceFontVariationSettingsProperty[];
  fontWeight?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[];
  src?: string | string[];
  unicodeRange?: string | string[];
}


export interface Viewport<TLength = string | 0> {
  msHeight?: ViewportHeightProperty<TLength>;
  msMaxHeight?: ViewportMaxHeightProperty<TLength>;
  msMaxWidth?: ViewportMaxWidthProperty<TLength>;
  msMaxZoom?: ViewportMaxZoomProperty;
  msMinHeight?: ViewportMinHeightProperty<TLength>;
  msMinWidth?: ViewportMinWidthProperty<TLength>;
  msMinZoom?: ViewportMinZoomProperty;
  msOrientation?: ViewportOrientationProperty;
  msUserZoom?: ViewportUserZoomProperty;
  msWidth?: ViewportWidthProperty<TLength>;
  msZoom?: ViewportZoomProperty;
  OOrientation?: ViewportOrientationProperty;
  height?: ViewportHeightProperty<TLength>;
  maxHeight?: ViewportMaxHeightProperty<TLength>;
  maxWidth?: ViewportMaxWidthProperty<TLength>;
  maxZoom?: ViewportMaxZoomProperty;
  minHeight?: ViewportMinHeightProperty<TLength>;
  minWidth?: ViewportMinWidthProperty<TLength>;
  minZoom?: ViewportMinZoomProperty;
  orientation?: ViewportOrientationProperty;
  userZoom?: ViewportUserZoomProperty;
  width?: ViewportWidthProperty<TLength>;
  zoom?: ViewportZoomProperty;
}

export interface ViewportHyphen<TLength = string | 0> {
  "-ms-height"?: ViewportHeightProperty<TLength>;
  "-ms-max-height"?: ViewportMaxHeightProperty<TLength>;
  "-ms-max-width"?: ViewportMaxWidthProperty<TLength>;
  "-ms-max-zoom"?: ViewportMaxZoomProperty;
  "-ms-min-height"?: ViewportMinHeightProperty<TLength>;
  "-ms-min-width"?: ViewportMinWidthProperty<TLength>;
  "-ms-min-zoom"?: ViewportMinZoomProperty;
  "-ms-orientation"?: ViewportOrientationProperty;
  "-ms-user-zoom"?: ViewportUserZoomProperty;
  "-ms-width"?: ViewportWidthProperty<TLength>;
  "-ms-zoom"?: ViewportZoomProperty;
  "-o-orientation"?: ViewportOrientationProperty;
  height?: ViewportHeightProperty<TLength>;
  "max-height"?: ViewportMaxHeightProperty<TLength>;
  "max-width"?: ViewportMaxWidthProperty<TLength>;
  "max-zoom"?: ViewportMaxZoomProperty;
  "min-height"?: ViewportMinHeightProperty<TLength>;
  "min-width"?: ViewportMinWidthProperty<TLength>;
  "min-zoom"?: ViewportMinZoomProperty;
  orientation?: ViewportOrientationProperty;
  "user-zoom"?: ViewportUserZoomProperty;
  width?: ViewportWidthProperty<TLength>;
  zoom?: ViewportZoomProperty;
}

export interface ViewportFallback<TLength = string | 0> {
  msHeight?:
    | ViewportHeightProperty<TLength>
    | ViewportHeightProperty<TLength>[];
  msMaxHeight?:
    | ViewportMaxHeightProperty<TLength>
    | ViewportMaxHeightProperty<TLength>[];
  msMaxWidth?:
    | ViewportMaxWidthProperty<TLength>
    | ViewportMaxWidthProperty<TLength>[];
  msMaxZoom?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  msMinHeight?:
    | ViewportMinHeightProperty<TLength>
    | ViewportMinHeightProperty<TLength>[];
  msMinWidth?:
    | ViewportMinWidthProperty<TLength>
    | ViewportMinWidthProperty<TLength>[];
  msMinZoom?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  msOrientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  msUserZoom?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  msWidth?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  msZoom?: ViewportZoomProperty | ViewportZoomProperty[];
  OOrientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  maxHeight?:
    | ViewportMaxHeightProperty<TLength>
    | ViewportMaxHeightProperty<TLength>[];
  maxWidth?:
    | ViewportMaxWidthProperty<TLength>
    | ViewportMaxWidthProperty<TLength>[];
  maxZoom?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  minHeight?:
    | ViewportMinHeightProperty<TLength>
    | ViewportMinHeightProperty<TLength>[];
  minWidth?:
    | ViewportMinWidthProperty<TLength>
    | ViewportMinWidthProperty<TLength>[];
  minZoom?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  orientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  userZoom?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  zoom?: ViewportZoomProperty | ViewportZoomProperty[];
}

export type AtRules =
  | "@charset"
  | "@counter-style"
  | "@document"
  | "@font-face"
  | "@font-feature-values"
  | "@import"
  | "@keyframes"
  | "@media"
  | "@namespace"
  | "@page"
  | "@supports"
  | "@viewport";

export type AdvancedPseudos =
  | ":-moz-any()"
  | ":-moz-dir"
  | ":-webkit-any()"
  | "::cue"
  | "::cue-region"
  | "::part"
  | "::slotted"
  | ":dir"
  | ":has"
  | ":host"
  | ":host-context"
  | ":is"
  | ":lang"
  | ":matches()"
  | ":not"
  | ":nth-child"
  | ":nth-last-child"
  | ":nth-last-of-type"
  | ":nth-of-type"
  | ":where";

export type SimplePseudos =
  | ":-khtml-any-link"
  | ":-moz-any-link"
  | ":-moz-focusring"
  | ":-moz-full-screen"
  | ":-moz-placeholder"
  | ":-moz-read-only"
  | ":-moz-read-write"
  | ":-ms-fullscreen"
  | ":-ms-input-placeholder"
  | ":-webkit-any-link"
  | ":-webkit-full-screen"
  | "::-moz-placeholder"
  | "::-moz-progress-bar"
  | "::-moz-range-progress"
  | "::-moz-range-thumb"
  | "::-moz-range-track"
  | "::-moz-selection"
  | "::-ms-backdrop"
  | "::-ms-browse"
  | "::-ms-check"
  | "::-ms-clear"
  | "::-ms-fill"
  | "::-ms-fill-lower"
  | "::-ms-fill-upper"
  | "::-ms-input-placeholder"
  | "::-ms-reveal"
  | "::-ms-thumb"
  | "::-ms-ticks-after"
  | "::-ms-ticks-before"
  | "::-ms-tooltip"
  | "::-ms-track"
  | "::-ms-value"
  | "::-webkit-backdrop"
  | "::-webkit-input-placeholder"
  | "::-webkit-progress-bar"
  | "::-webkit-progress-inner-value"
  | "::-webkit-progress-value"
  | "::-webkit-slider-runnable-track"
  | "::-webkit-slider-thumb"
  | "::after"
  | "::backdrop"
  | "::before"
  | "::cue"
  | "::cue-region"
  | "::first-letter"
  | "::first-line"
  | "::grammar-error"
  | "::marker"
  | "::placeholder"
  | "::selection"
  | "::spelling-error"
  | ":active"
  | ":after"
  | ":any-link"
  | ":before"
  | ":blank"
  | ":checked"
  | ":default"
  | ":defined"
  | ":disabled"
  | ":empty"
  | ":enabled"
  | ":first"
  | ":first-child"
  | ":first-letter"
  | ":first-line"
  | ":first-of-type"
  | ":focus"
  | ":focus-visible"
  | ":focus-within"
  | ":fullscreen"
  | ":hover"
  | ":in-range"
  | ":indeterminate"
  | ":invalid"
  | ":last-child"
  | ":last-of-type"
  | ":left"
  | ":link"
  | ":only-child"
  | ":only-of-type"
  | ":optional"
  | ":out-of-range"
  | ":placeholder-shown"
  | ":read-only"
  | ":read-write"
  | ":required"
  | ":right"
  | ":root"
  | ":scope"
  | ":target"
  | ":valid"
  | ":visited";

export type Pseudos = AdvancedPseudos | SimplePseudos;

export type HtmlAttributes =
  | "[-webkit-dropzone]"
  | "[-webkit-slot]"
  | "[abbr]"
  | "[accept-charset]"
  | "[accept]"
  | "[accesskey]"
  | "[action]"
  | "[align]"
  | "[alink]"
  | "[allow]"
  | "[allowfullscreen]"
  | "[allowpaymentrequest]"
  | "[alt]"
  | "[archive]"
  | "[async]"
  | "[autobuffer]"
  | "[autocapitalize]"
  | "[autocomplete]"
  | "[autofocus]"
  | "[autoplay]"
  | "[axis]"
  | "[background]"
  | "[behavior]"
  | "[bgcolor]"
  | "[border]"
  | "[bottommargin]"
  | "[buffered]"
  | "[cellpadding]"
  | "[cellspacing]"
  | "[char]"
  | "[charoff]"
  | "[charset]"
  | "[checked]"
  | "[cite]"
  | "[class]"
  | "[classid]"
  | "[clear]"
  | "[code]"
  | "[codebase]"
  | "[codetype]"
  | "[color]"
  | "[cols]"
  | "[colspan]"
  | "[command]"
  | "[compact]"
  | "[content]"
  | "[contenteditable]"
  | "[contextmenu]"
  | "[controls]"
  | "[coords]"
  | "[crossorigin]"
  | "[data]"
  | "[datafld]"
  | "[datasrc]"
  | "[datetime]"
  | "[declare]"
  | "[decoding]"
  | "[default]"
  | "[defer]"
  | "[dir]"
  | "[direction]"
  | "[disabled]"
  | "[download]"
  | "[draggable]"
  | "[dropzone]"
  | "[enctype]"
  | "[exportparts]"
  | "[face]"
  | "[for]"
  | "[form]"
  | "[formaction]"
  | "[formenctype]"
  | "[formmethod]"
  | "[formnovalidate]"
  | "[formtarget]"
  | "[frame]"
  | "[frameborder]"
  | "[headers]"
  | "[height]"
  | "[hidden]"
  | "[high]"
  | "[href]"
  | "[hreflang]"
  | "[hspace]"
  | "[http-equiv]"
  | "[icon]"
  | "[id]"
  | "[inputmode]"
  | "[integrity]"
  | "[intrinsicsize]"
  | "[is]"
  | "[ismap]"
  | "[itemid]"
  | "[itemprop]"
  | "[itemref]"
  | "[itemscope]"
  | "[itemtype]"
  | "[kind]"
  | "[label]"
  | "[lang]"
  | "[language]"
  | "[leftmargin]"
  | "[link]"
  | "[loading]"
  | "[longdesc]"
  | "[loop]"
  | "[low]"
  | "[manifest]"
  | "[marginheight]"
  | "[marginwidth]"
  | "[max]"
  | "[maxlength]"
  | "[mayscript]"
  | "[media]"
  | "[method]"
  | "[methods]"
  | "[min]"
  | "[minlength]"
  | "[moz-opaque]"
  | "[mozallowfullscreen]"
  | "[mozbrowser]"
  | "[mozcurrentsampleoffset]"
  | "[msallowfullscreen]"
  | "[multiple]"
  | "[muted]"
  | "[name]"
  | "[nohref]"
  | "[nomodule]"
  | "[noresize]"
  | "[noshade]"
  | "[novalidate]"
  | "[nowrap]"
  | "[object]"
  | "[onafterprint]"
  | "[onbeforeprint]"
  | "[onbeforeunload]"
  | "[onblur]"
  | "[onerror]"
  | "[onfocus]"
  | "[onhashchange]"
  | "[onlanguagechange]"
  | "[onload]"
  | "[onmessage]"
  | "[onoffline]"
  | "[ononline]"
  | "[onpopstate]"
  | "[onredo]"
  | "[onresize]"
  | "[onstorage]"
  | "[onundo]"
  | "[onunload]"
  | "[open]"
  | "[optimum]"
  | "[part]"
  | "[ping]"
  | "[placeholder]"
  | "[played]"
  | "[poster]"
  | "[prefetch]"
  | "[preload]"
  | "[profile]"
  | "[prompt]"
  | "[radiogroup]"
  | "[readonly]"
  | "[referrerPolicy]"
  | "[referrerpolicy]"
  | "[rel]"
  | "[required]"
  | "[rev]"
  | "[reversed]"
  | "[rightmargin]"
  | "[rows]"
  | "[rowspan]"
  | "[rules]"
  | "[sandbox-allow-modals]"
  | "[sandbox-allow-popups-to-escape-sandbox]"
  | "[sandbox-allow-popups]"
  | "[sandbox-allow-presentation]"
  | "[sandbox-allow-storage-access-by-user-activation]"
  | "[sandbox-allow-top-navigation-by-user-activation]"
  | "[sandbox]"
  | "[scope]"
  | "[scoped]"
  | "[scrollamount]"
  | "[scrolldelay]"
  | "[scrolling]"
  | "[selected]"
  | "[shape]"
  | "[size]"
  | "[sizes]"
  | "[slot]"
  | "[span]"
  | "[spellcheck]"
  | "[src]"
  | "[srcdoc]"
  | "[srclang]"
  | "[srcset]"
  | "[standby]"
  | "[start]"
  | "[style]"
  | "[summary]"
  | "[tabindex]"
  | "[target]"
  | "[text]"
  | "[title]"
  | "[topmargin]"
  | "[translate]"
  | "[truespeed]"
  | "[type]"
  | "[typemustmatch]"
  | "[usemap]"
  | "[valign]"
  | "[value]"
  | "[valuetype]"
  | "[version]"
  | "[vlink]"
  | "[volume]"
  | "[vspace]"
  | "[webkitallowfullscreen]"
  | "[width]"
  | "[wrap]"
  | "[xmlns]";

export type SvgAttributes =
  | "[accent-height]"
  | "[alignment-baseline]"
  | "[allowReorder]"
  | "[alphabetic]"
  | "[animation]"
  | "[arabic-form]"
  | "[ascent]"
  | "[attributeName]"
  | "[attributeType]"
  | "[azimuth]"
  | "[baseFrequency]"
  | "[baseProfile]"
  | "[baseline-shift]"
  | "[bbox]"
  | "[begin]"
  | "[bias]"
  | "[by]"
  | "[calcMode]"
  | "[cap-height]"
  | "[class]"
  | "[clip-path]"
  | "[clip-rule]"
  | "[clipPathUnits]"
  | "[clip]"
  | "[color-interpolation-filters]"
  | "[color-interpolation]"
  | "[color-profile]"
  | "[color-rendering]"
  | "[color]"
  | "[contentScriptType]"
  | "[contentStyleType]"
  | "[cursor]"
  | "[cx]"
  | "[cy]"
  | "[d]"
  | "[descent]"
  | "[diffuseConstant]"
  | "[direction]"
  | "[display]"
  | "[divisor]"
  | "[document]"
  | "[dominant-baseline]"
  | "[download]"
  | "[dur]"
  | "[dx]"
  | "[dy]"
  | "[edgeMode]"
  | "[elevation]"
  | "[enable-background]"
  | "[externalResourcesRequired]"
  | "[fill-opacity]"
  | "[fill-rule]"
  | "[fill]"
  | "[filterRes]"
  | "[filterUnits]"
  | "[filter]"
  | "[flood-color]"
  | "[flood-opacity]"
  | "[font-family]"
  | "[font-size-adjust]"
  | "[font-size]"
  | "[font-stretch]"
  | "[font-style]"
  | "[font-variant]"
  | "[font-weight]"
  | "[format]"
  | "[fr]"
  | "[from]"
  | "[fx]"
  | "[fy]"
  | "[g1]"
  | "[g2]"
  | "[global]"
  | "[glyph-name]"
  | "[glyph-orientation-horizontal]"
  | "[glyph-orientation-vertical]"
  | "[glyphRef]"
  | "[gradientTransform]"
  | "[gradientUnits]"
  | "[graphical]"
  | "[hanging]"
  | "[hatchContentUnits]"
  | "[hatchUnits]"
  | "[height]"
  | "[horiz-adv-x]"
  | "[horiz-origin-x]"
  | "[horiz-origin-y]"
  | "[href]"
  | "[hreflang]"
  | "[id]"
  | "[ideographic]"
  | "[image-rendering]"
  | "[in2]"
  | "[in]"
  | "[k1]"
  | "[k2]"
  | "[k3]"
  | "[k4]"
  | "[k]"
  | "[kernelMatrix]"
  | "[kernelUnitLength]"
  | "[kerning]"
  | "[keyPoints]"
  | "[lang]"
  | "[lengthAdjust]"
  | "[letter-spacing]"
  | "[lighterForError]"
  | "[lighting-color]"
  | "[limitingConeAngle]"
  | "[local]"
  | "[marker-end]"
  | "[marker-mid]"
  | "[marker-start]"
  | "[markerHeight]"
  | "[markerUnits]"
  | "[markerWidth]"
  | "[maskContentUnits]"
  | "[maskUnits]"
  | "[mask]"
  | "[mathematical]"
  | "[media]"
  | "[method]"
  | "[mode]"
  | "[name]"
  | "[numOctaves]"
  | "[offset]"
  | "[opacity]"
  | "[operator]"
  | "[order]"
  | "[orient]"
  | "[orientation]"
  | "[origin]"
  | "[overflow]"
  | "[overline-position]"
  | "[overline-thickness]"
  | "[paint-order]"
  | "[panose-1]"
  | "[path]"
  | "[patternContentUnits]"
  | "[patternTransform]"
  | "[patternUnits]"
  | "[ping]"
  | "[pitch]"
  | "[pointer-events]"
  | "[pointsAtX]"
  | "[pointsAtY]"
  | "[pointsAtZ]"
  | "[points]"
  | "[preserveAlpha]"
  | "[preserveAspectRatio]"
  | "[primitiveUnits]"
  | "[r]"
  | "[radius]"
  | "[refX]"
  | "[refY]"
  | "[referrerPolicy]"
  | "[rel]"
  | "[rendering-intent]"
  | "[repeatCount]"
  | "[requiredExtensions]"
  | "[requiredFeatures]"
  | "[rotate]"
  | "[rx]"
  | "[ry]"
  | "[scale]"
  | "[seed]"
  | "[shape-rendering]"
  | "[side]"
  | "[slope]"
  | "[solid-color]"
  | "[solid-opacity]"
  | "[spacing]"
  | "[specularConstant]"
  | "[specularExponent]"
  | "[spreadMethod]"
  | "[startOffset]"
  | "[stdDeviation]"
  | "[stemh]"
  | "[stemv]"
  | "[stitchTiles]"
  | "[stop-color]"
  | "[stop-opacity]"
  | "[strikethrough-position]"
  | "[strikethrough-thickness]"
  | "[string]"
  | "[stroke-dasharray]"
  | "[stroke-dashoffset]"
  | "[stroke-linecap]"
  | "[stroke-linejoin]"
  | "[stroke-miterlimit]"
  | "[stroke-opacity]"
  | "[stroke-width]"
  | "[stroke]"
  | "[style]"
  | "[surfaceScale]"
  | "[systemLanguage]"
  | "[tabindex]"
  | "[targetX]"
  | "[targetY]"
  | "[target]"
  | "[text-anchor]"
  | "[text-decoration]"
  | "[text-overflow]"
  | "[text-rendering]"
  | "[textLength]"
  | "[title]"
  | "[to]"
  | "[transform]"
  | "[type]"
  | "[u1]"
  | "[u2]"
  | "[underline-position]"
  | "[underline-thickness]"
  | "[unicode-bidi]"
  | "[unicode-range]"
  | "[unicode]"
  | "[units-per-em]"
  | "[v-alphabetic]"
  | "[v-hanging]"
  | "[v-ideographic]"
  | "[v-mathematical]"
  | "[values]"
  | "[vector-effect]"
  | "[version]"
  | "[vert-adv-y]"
  | "[vert-origin-x]"
  | "[vert-origin-y]"
  | "[viewBox]"
  | "[viewTarget]"
  | "[visibility]"
  | "[white-space]"
  | "[width]"
  | "[widths]"
  | "[word-spacing]"
  | "[writing-mode]"
  | "[x-height]"
  | "[x1]"
  | "[x2]"
  | "[xChannelSelector]"
  | "[x]"
  | "[y1]"
  | "[y2]"
  | "[yChannelSelector]"
  | "[y]"
  | "[z]"
  | "[zoomAndPan]";

export type Globals =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset";

type GlobalsString = Globals | string;

type GlobalsNumber = Globals | number;

export type AlignContentProperty =
  | Globals
  | ContentDistribution
  | ContentPosition
  | "baseline"
  | "normal"
  | string;

export type AlignItemsProperty =
  | Globals
  | SelfPosition
  | "baseline"
  | "normal"
  | "stretch"
  | string;

export type AlignSelfProperty =
  | Globals
  | SelfPosition
  | "auto"
  | "baseline"
  | "normal"
  | "stretch"
  | string;

export type AnimationProperty = Globals | SingleAnimation | string;

export type AnimationDirectionProperty =
  | Globals
  | SingleAnimationDirection
  | string;

export type AnimationFillModeProperty =
  | Globals
  | SingleAnimationFillMode
  | string;

export type AnimationIterationCountProperty =
  | Globals
  | "infinite"
  | string
  | number;

export type AnimationNameProperty = Globals | "none" | string;

export type AnimationPlayStateProperty =
  | Globals
  | "paused"
  | "running"
  | string;

export type AnimationTimingFunctionProperty = Globals | TimingFunction | string;

export type AppearanceProperty =
  | Globals
  | Compat
  | "button"
  | "none"
  | "textfield";

export type AspectRatioProperty = Globals | "auto" | string;

export type BackdropFilterProperty = Globals | "none" | string;

export type BackfaceVisibilityProperty = Globals | "hidden" | "visible";

export type BackgroundProperty<TLength> =
  | Globals
  | FinalBgLayer<TLength>
  | string;

export type BackgroundAttachmentProperty = Globals | Attachment | string;

export type BackgroundBlendModeProperty = Globals | BlendMode | string;

export type BackgroundClipProperty = Globals | Box | string;

export type BackgroundColorProperty = Globals | Color;

export type BackgroundImageProperty = Globals | "none" | string;

export type BackgroundOriginProperty = Globals | Box | string;

export type BackgroundPositionProperty<TLength> =
  | Globals
  | BgPosition<TLength>
  | string;

export type BackgroundPositionXProperty<TLength> =
  | Globals
  | TLength
  | "center"
  | "left"
  | "right"
  | "x-end"
  | "x-start"
  | string;

export type BackgroundPositionYProperty<TLength> =
  | Globals
  | TLength
  | "bottom"
  | "center"
  | "top"
  | "y-end"
  | "y-start"
  | string;

export type BackgroundRepeatProperty = Globals | RepeatStyle | string;

export type BackgroundSizeProperty<TLength> =
  | Globals
  | BgSize<TLength>
  | string;

export type BlockOverflowProperty = Globals | "clip" | "ellipsis" | string;

export type BlockSizeProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "auto"
  | "max-content"
  | "min-content"
  | string;

export type BorderProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderBlockProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderBlockColorProperty = Globals | Color | string;

export type BorderBlockEndProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderBlockEndColorProperty = Globals | Color;

export type BorderBlockEndStyleProperty = Globals | LineStyle;

export type BorderBlockEndWidthProperty<TLength> = Globals | LineWidth<TLength>;

export type BorderBlockStartProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderBlockStartColorProperty = Globals | Color;

export type BorderBlockStartStyleProperty = Globals | LineStyle;

export type BorderBlockStartWidthProperty<TLength> =
  | Globals
  | LineWidth<TLength>;

export type BorderBlockStyleProperty = Globals | LineStyle;

export type BorderBlockWidthProperty<TLength> = Globals | LineWidth<TLength>;

export type BorderBottomProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderBottomColorProperty = Globals | Color;

export type BorderBottomLeftRadiusProperty<TLength> =
  | Globals
  | TLength
  | string;

export type BorderBottomRightRadiusProperty<TLength> =
  | Globals
  | TLength
  | string;

export type BorderBottomStyleProperty = Globals | LineStyle;

export type BorderBottomWidthProperty<TLength> = Globals | LineWidth<TLength>;

export type BorderCollapseProperty = Globals | "collapse" | "separate";

export type BorderColorProperty = Globals | Color | string;

export type BorderEndEndRadiusProperty<TLength> = Globals | TLength | string;

export type BorderEndStartRadiusProperty<TLength> = Globals | TLength | string;

export type BorderImageProperty =
  | Globals
  | "none"
  | "repeat"
  | "round"
  | "space"
  | "stretch"
  | string
  | number;

export type BorderImageOutsetProperty<TLength> =
  | Globals
  | TLength
  | string
  | number;

export type BorderImageRepeatProperty =
  | Globals
  | "repeat"
  | "round"
  | "space"
  | "stretch"
  | string;

export type BorderImageSliceProperty = Globals | string | number;

export type BorderImageSourceProperty = Globals | "none" | string;

export type BorderImageWidthProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string
  | number;

export type BorderInlineProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderInlineColorProperty = Globals | Color | string;

export type BorderInlineEndProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderInlineEndColorProperty = Globals | Color;

export type BorderInlineEndStyleProperty = Globals | LineStyle;

export type BorderInlineEndWidthProperty<TLength> =
  | Globals
  | LineWidth<TLength>;

export type BorderInlineStartProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderInlineStartColorProperty = Globals | Color;

export type BorderInlineStartStyleProperty = Globals | LineStyle;

export type BorderInlineStartWidthProperty<TLength> =
  | Globals
  | LineWidth<TLength>;

export type BorderInlineStyleProperty = Globals | LineStyle;

export type BorderInlineWidthProperty<TLength> = Globals | LineWidth<TLength>;

export type BorderLeftProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderLeftColorProperty = Globals | Color;

export type BorderLeftStyleProperty = Globals | LineStyle;

export type BorderLeftWidthProperty<TLength> = Globals | LineWidth<TLength>;

export type BorderRadiusProperty<TLength> = Globals | TLength | string;

export type BorderRightProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderRightColorProperty = Globals | Color;

export type BorderRightStyleProperty = Globals | LineStyle;

export type BorderRightWidthProperty<TLength> = Globals | LineWidth<TLength>;

export type BorderSpacingProperty<TLength> = Globals | TLength | string;

export type BorderStartEndRadiusProperty<TLength> = Globals | TLength | string;

export type BorderStartStartRadiusProperty<TLength> =
  | Globals
  | TLength
  | string;

export type BorderStyleProperty = Globals | LineStyle | string;

export type BorderTopProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type BorderTopColorProperty = Globals | Color;

export type BorderTopLeftRadiusProperty<TLength> = Globals | TLength | string;

export type BorderTopRightRadiusProperty<TLength> = Globals | TLength | string;

export type BorderTopStyleProperty = Globals | LineStyle;

export type BorderTopWidthProperty<TLength> = Globals | LineWidth<TLength>;

export type BorderWidthProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | string;

export type BottomProperty<TLength> = Globals | TLength | "auto" | string;

export type BoxAlignProperty =
  | Globals
  | "baseline"
  | "center"
  | "end"
  | "start"
  | "stretch";

export type BoxDecorationBreakProperty = Globals | "clone" | "slice";

export type BoxDirectionProperty = Globals | "inherit" | "normal" | "reverse";

export type BoxLinesProperty = Globals | "multiple" | "single";

export type BoxOrientProperty =
  | Globals
  | "block-axis"
  | "horizontal"
  | "inherit"
  | "inline-axis"
  | "vertical";

export type BoxPackProperty = Globals | "center" | "end" | "justify" | "start";

export type BoxShadowProperty = Globals | "none" | string;

export type BoxSizingProperty = Globals | "border-box" | "content-box";

export type BreakAfterProperty =
  | Globals
  | "all"
  | "always"
  | "auto"
  | "avoid"
  | "avoid-column"
  | "avoid-page"
  | "avoid-region"
  | "column"
  | "left"
  | "page"
  | "recto"
  | "region"
  | "right"
  | "verso";

export type BreakBeforeProperty =
  | Globals
  | "all"
  | "always"
  | "auto"
  | "avoid"
  | "avoid-column"
  | "avoid-page"
  | "avoid-region"
  | "column"
  | "left"
  | "page"
  | "recto"
  | "region"
  | "right"
  | "verso";

export type BreakInsideProperty =
  | Globals
  | "auto"
  | "avoid"
  | "avoid-column"
  | "avoid-page"
  | "avoid-region";

export type CaptionSideProperty =
  | Globals
  | "block-end"
  | "block-start"
  | "bottom"
  | "inline-end"
  | "inline-start"
  | "top";

export type CaretColorProperty = Globals | Color | "auto";

export type ClearProperty =
  | Globals
  | "both"
  | "inline-end"
  | "inline-start"
  | "left"
  | "none"
  | "right";

export type ClipProperty = Globals | "auto" | string;

export type ClipPathProperty = Globals | GeometryBox | "none" | string;

export type ColorProperty = Globals | Color;

export type ColorAdjustProperty = Globals | "economy" | "exact";

export type ColumnCountProperty = Globals | "auto" | number;

export type ColumnFillProperty = Globals | "auto" | "balance" | "balance-all";

export type ColumnGapProperty<TLength> = Globals | TLength | "normal" | string;

export type ColumnRuleProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type ColumnRuleColorProperty = Globals | Color;

export type ColumnRuleStyleProperty = Globals | LineStyle | string;

export type ColumnRuleWidthProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | string;

export type ColumnSpanProperty = Globals | "all" | "none";

export type ColumnWidthProperty<TLength> = Globals | TLength | "auto";

export type ColumnsProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string
  | number;

export type ContainProperty =
  | Globals
  | "content"
  | "layout"
  | "none"
  | "paint"
  | "size"
  | "strict"
  | "style"
  | string;

export type ContentProperty =
  | Globals
  | ContentList
  | "none"
  | "normal"
  | string;

export type CounterIncrementProperty = Globals | "none" | string;

export type CounterResetProperty = Globals | "none" | string;

export type CounterSetProperty = Globals | "none" | string;

export type CursorProperty =
  | Globals
  | "-moz-grab"
  | "-webkit-grab"
  | "alias"
  | "all-scroll"
  | "auto"
  | "cell"
  | "col-resize"
  | "context-menu"
  | "copy"
  | "crosshair"
  | "default"
  | "e-resize"
  | "ew-resize"
  | "grab"
  | "grabbing"
  | "help"
  | "move"
  | "n-resize"
  | "ne-resize"
  | "nesw-resize"
  | "no-drop"
  | "none"
  | "not-allowed"
  | "ns-resize"
  | "nw-resize"
  | "nwse-resize"
  | "pointer"
  | "progress"
  | "row-resize"
  | "s-resize"
  | "se-resize"
  | "sw-resize"
  | "text"
  | "vertical-text"
  | "w-resize"
  | "wait"
  | "zoom-in"
  | "zoom-out"
  | string;

export type DirectionProperty = Globals | "ltr" | "rtl";

export type DisplayProperty =
  | Globals
  | DisplayOutside
  | DisplayInside
  | DisplayInternal
  | DisplayLegacy
  | "contents"
  | "list-item"
  | "none"
  | string;

export type EmptyCellsProperty = Globals | "hide" | "show";

export type FilterProperty = Globals | "none" | string;

export type FlexProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | "content"
  | "max-content"
  | "min-content"
  | "none"
  | string
  | number;

export type FlexBasisProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "-webkit-auto"
  | "auto"
  | "content"
  | "max-content"
  | "min-content"
  | string;

export type FlexDirectionProperty =
  | Globals
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";

export type FlexFlowProperty =
  | Globals
  | "column"
  | "column-reverse"
  | "nowrap"
  | "row"
  | "row-reverse"
  | "wrap"
  | "wrap-reverse"
  | string;

export type FlexWrapProperty = Globals | "nowrap" | "wrap" | "wrap-reverse";

export type FloatProperty =
  | Globals
  | "inline-end"
  | "inline-start"
  | "left"
  | "none"
  | "right";

export type FontProperty =
  | Globals
  | "caption"
  | "icon"
  | "menu"
  | "message-box"
  | "small-caption"
  | "status-bar"
  | string;

export type FontFamilyProperty = Globals | GenericFamily | string;

export type FontFeatureSettingsProperty = Globals | "normal" | string;

export type FontKerningProperty = Globals | "auto" | "none" | "normal";

export type FontLanguageOverrideProperty = Globals | "normal" | string;

export type FontOpticalSizingProperty = Globals | "auto" | "none";

export type FontSizeProperty<TLength> =
  | Globals
  | AbsoluteSize
  | TLength
  | "larger"
  | "smaller"
  | string;

export type FontSizeAdjustProperty = Globals | "none" | number;

export type FontStretchProperty = Globals | FontStretchAbsolute;

export type FontStyleProperty =
  | Globals
  | "italic"
  | "normal"
  | "oblique"
  | string;

export type FontSynthesisProperty =
  | Globals
  | "none"
  | "style"
  | "weight"
  | string;

export type FontVariantProperty =
  | Globals
  | EastAsianVariantValues
  | "all-petite-caps"
  | "all-small-caps"
  | "common-ligatures"
  | "contextual"
  | "diagonal-fractions"
  | "discretionary-ligatures"
  | "full-width"
  | "historical-forms"
  | "historical-ligatures"
  | "lining-nums"
  | "no-common-ligatures"
  | "no-contextual"
  | "no-discretionary-ligatures"
  | "no-historical-ligatures"
  | "none"
  | "normal"
  | "oldstyle-nums"
  | "ordinal"
  | "petite-caps"
  | "proportional-nums"
  | "proportional-width"
  | "ruby"
  | "slashed-zero"
  | "small-caps"
  | "stacked-fractions"
  | "tabular-nums"
  | "titling-caps"
  | "unicase"
  | string;

export type FontVariantAlternatesProperty =
  | Globals
  | "historical-forms"
  | "normal"
  | string;

export type FontVariantCapsProperty =
  | Globals
  | "all-petite-caps"
  | "all-small-caps"
  | "normal"
  | "petite-caps"
  | "small-caps"
  | "titling-caps"
  | "unicase";

export type FontVariantEastAsianProperty =
  | Globals
  | EastAsianVariantValues
  | "full-width"
  | "normal"
  | "proportional-width"
  | "ruby"
  | string;

export type FontVariantLigaturesProperty =
  | Globals
  | "common-ligatures"
  | "contextual"
  | "discretionary-ligatures"
  | "historical-ligatures"
  | "no-common-ligatures"
  | "no-contextual"
  | "no-discretionary-ligatures"
  | "no-historical-ligatures"
  | "none"
  | "normal"
  | string;

export type FontVariantNumericProperty =
  | Globals
  | "diagonal-fractions"
  | "lining-nums"
  | "normal"
  | "oldstyle-nums"
  | "ordinal"
  | "proportional-nums"
  | "slashed-zero"
  | "stacked-fractions"
  | "tabular-nums"
  | string;

export type FontVariantPositionProperty = Globals | "normal" | "sub" | "super";

export type FontVariationSettingsProperty = Globals | "normal" | string;

export type FontWeightProperty =
  | Globals
  | FontWeightAbsolute
  | "bolder"
  | "lighter";

export type GapProperty<TLength> = Globals | TLength | "normal" | string;

export type GridProperty = Globals | "none" | string;

export type GridAreaProperty = Globals | GridLine | string;

export type GridAutoColumnsProperty<TLength> =
  | Globals
  | TrackBreadth<TLength>
  | string;

export type GridAutoFlowProperty =
  | Globals
  | "column"
  | "dense"
  | "row"
  | string;

export type GridAutoRowsProperty<TLength> =
  | Globals
  | TrackBreadth<TLength>
  | string;

export type GridColumnProperty = Globals | GridLine | string;

export type GridColumnEndProperty = Globals | GridLine;

export type GridColumnGapProperty<TLength> = Globals | TLength | string;

export type GridColumnStartProperty = Globals | GridLine;

export type GridGapProperty<TLength> = Globals | TLength | string;

export type GridRowProperty = Globals | GridLine | string;

export type GridRowEndProperty = Globals | GridLine;

export type GridRowGapProperty<TLength> = Globals | TLength | string;

export type GridRowStartProperty = Globals | GridLine;

export type GridTemplateProperty = Globals | "none" | string;

export type GridTemplateAreasProperty = Globals | "none" | string;

export type GridTemplateColumnsProperty<TLength> =
  | Globals
  | TrackBreadth<TLength>
  | "none"
  | "subgrid"
  | string;

export type GridTemplateRowsProperty<TLength> =
  | Globals
  | TrackBreadth<TLength>
  | "none"
  | "subgrid"
  | string;

export type HangingPunctuationProperty =
  | Globals
  | "allow-end"
  | "first"
  | "force-end"
  | "last"
  | "none"
  | string;

export type HeightProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "auto"
  | "max-content"
  | "min-content"
  | string;

export type HyphensProperty = Globals | "auto" | "manual" | "none";

export type ImageOrientationProperty = Globals | "flip" | "from-image" | string;

export type ImageRenderingProperty =
  | Globals
  | "-moz-crisp-edges"
  | "-webkit-optimize-contrast"
  | "auto"
  | "crisp-edges"
  | "pixelated";

export type ImageResolutionProperty = Globals | "from-image" | string;

export type ImeModeProperty =
  | Globals
  | "active"
  | "auto"
  | "disabled"
  | "inactive"
  | "normal";

export type InitialLetterProperty = Globals | "normal" | string | number;

export type InlineSizeProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "auto"
  | "max-content"
  | "min-content"
  | string;

export type InsetProperty<TLength> = Globals | TLength | "auto" | string;

export type InsetBlockProperty<TLength> = Globals | TLength | "auto" | string;

export type InsetBlockEndProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type InsetBlockStartProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type InsetInlineProperty<TLength> = Globals | TLength | "auto" | string;

export type InsetInlineEndProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type InsetInlineStartProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type IsolationProperty = Globals | "auto" | "isolate";

export type JustifyContentProperty =
  | Globals
  | ContentDistribution
  | ContentPosition
  | "left"
  | "normal"
  | "right"
  | string;

export type JustifyItemsProperty =
  | Globals
  | SelfPosition
  | "baseline"
  | "left"
  | "legacy"
  | "normal"
  | "right"
  | "stretch"
  | string;

export type JustifySelfProperty =
  | Globals
  | SelfPosition
  | "auto"
  | "baseline"
  | "left"
  | "normal"
  | "right"
  | "stretch"
  | string;

export type LeftProperty<TLength> = Globals | TLength | "auto" | string;

export type LetterSpacingProperty<TLength> = Globals | TLength | "normal";

export type LineBreakProperty =
  | Globals
  | "anywhere"
  | "auto"
  | "loose"
  | "normal"
  | "strict";

export type LineClampProperty = Globals | "none" | number;

export type LineHeightProperty<TLength> =
  | Globals
  | TLength
  | "normal"
  | string
  | number;

export type LineHeightStepProperty<TLength> = Globals | TLength;

export type ListStyleProperty =
  | Globals
  | "inside"
  | "none"
  | "outside"
  | string;

export type ListStyleImageProperty = Globals | "none" | string;

export type ListStylePositionProperty = Globals | "inside" | "outside";

export type ListStyleTypeProperty = Globals | "none" | string;

export type MarginProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginBlockProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginBlockEndProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type MarginBlockStartProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type MarginBottomProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginInlineProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginInlineEndProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type MarginInlineStartProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type MarginLeftProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginRightProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginTopProperty<TLength> = Globals | TLength | "auto" | string;

export type MaskProperty<TLength> = Globals | MaskLayer<TLength> | string;

export type MaskBorderProperty =
  | Globals
  | "alpha"
  | "luminance"
  | "none"
  | "repeat"
  | "round"
  | "space"
  | "stretch"
  | string
  | number;

export type MaskBorderModeProperty = Globals | "alpha" | "luminance";

export type MaskBorderOutsetProperty<TLength> =
  | Globals
  | TLength
  | string
  | number;

export type MaskBorderRepeatProperty =
  | Globals
  | "repeat"
  | "round"
  | "space"
  | "stretch"
  | string;

export type MaskBorderSliceProperty = Globals | string | number;

export type MaskBorderSourceProperty = Globals | "none" | string;

export type MaskBorderWidthProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string
  | number;

export type MaskClipProperty = Globals | GeometryBox | "no-clip" | string;

export type MaskCompositeProperty = Globals | CompositingOperator | string;

export type MaskImageProperty = Globals | "none" | string;

export type MaskModeProperty = Globals | MaskingMode | string;

export type MaskOriginProperty = Globals | Box | "margin-box" | string;

export type MaskPositionProperty<TLength> =
  | Globals
  | Position<TLength>
  | string;

export type MaskRepeatProperty = Globals | RepeatStyle | string;

export type MaskSizeProperty<TLength> = Globals | BgSize<TLength> | string;

export type MaskTypeProperty = Globals | "alpha" | "luminance";

export type MaxBlockSizeProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "auto"
  | "max-content"
  | "min-content"
  | string;

export type MaxHeightProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "-webkit-max-content"
  | "-webkit-min-content"
  | "auto"
  | "max-content"
  | "min-content"
  | string;

export type MaxInlineSizeProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "auto"
  | "max-content"
  | "min-content"
  | string;

export type MaxLinesProperty = Globals | "none" | number;

export type MaxWidthProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "-webkit-max-content"
  | "-webkit-min-content"
  | "auto"
  | "intrinsic"
  | "max-content"
  | "min-content"
  | string;

export type MinBlockSizeProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "auto"
  | "max-content"
  | "min-content"
  | string;

export type MinHeightProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "-webkit-max-content"
  | "-webkit-min-content"
  | "auto"
  | "max-content"
  | "min-content"
  | string;

export type MinInlineSizeProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "auto"
  | "max-content"
  | "min-content"
  | string;

export type MinWidthProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "-webkit-max-content"
  | "-webkit-min-content"
  | "auto"
  | "intrinsic"
  | "max-content"
  | "min-content"
  | "min-intrinsic"
  | string;

export type MixBlendModeProperty = Globals | BlendMode;

export type OffsetProperty<TLength> =
  | Globals
  | Position<TLength>
  | GeometryBox
  | "auto"
  | "none"
  | string;

export type OffsetDistanceProperty<TLength> = Globals | TLength | string;

export type OffsetPathProperty = Globals | GeometryBox | "none" | string;

export type OffsetRotateProperty = Globals | "auto" | "reverse" | string;

export type ObjectFitProperty =
  | Globals
  | "contain"
  | "cover"
  | "fill"
  | "none"
  | "scale-down";

export type ObjectPositionProperty<TLength> = Globals | Position<TLength>;

export type OffsetAnchorProperty<TLength> =
  | Globals
  | Position<TLength>
  | "auto";

export type OpacityProperty = Globals | string | number;

export type OutlineProperty<TLength> =
  | Globals
  | Color
  | LineStyle
  | LineWidth<TLength>
  | "auto"
  | "invert"
  | string;

export type OutlineColorProperty = Globals | Color | "invert";

export type OutlineOffsetProperty<TLength> = Globals | TLength;

export type OutlineStyleProperty = Globals | LineStyle | "auto" | string;

export type OutlineWidthProperty<TLength> = Globals | LineWidth<TLength>;

export type OverflowProperty =
  | Globals
  | "auto"
  | "hidden"
  | "scroll"
  | "visible"
  | string;

export type OverflowAnchorProperty = Globals | "auto" | "none";

export type OverflowBlockProperty =
  | Globals
  | "auto"
  | "clip"
  | "hidden"
  | "scroll"
  | "visible";

export type OverflowClipBoxProperty = Globals | "content-box" | "padding-box";

export type OverflowInlineProperty =
  | Globals
  | "auto"
  | "clip"
  | "hidden"
  | "scroll"
  | "visible";

export type OverflowWrapProperty =
  | Globals
  | "anywhere"
  | "break-word"
  | "normal";

export type OverflowXProperty =
  | Globals
  | "auto"
  | "hidden"
  | "scroll"
  | "visible";

export type OverflowYProperty =
  | Globals
  | "auto"
  | "hidden"
  | "scroll"
  | "visible";

export type OverscrollBehaviorProperty =
  | Globals
  | "auto"
  | "contain"
  | "none"
  | string;

export type OverscrollBehaviorBlockProperty =
  | Globals
  | "auto"
  | "contain"
  | "none";

export type OverscrollBehaviorInlineProperty =
  | Globals
  | "auto"
  | "contain"
  | "none";

export type OverscrollBehaviorXProperty = Globals | "auto" | "contain" | "none";

export type OverscrollBehaviorYProperty = Globals | "auto" | "contain" | "none";

export type PaddingProperty<TLength> = Globals | TLength | string;

export type PaddingBlockProperty<TLength> = Globals | TLength | string;

export type PaddingBlockEndProperty<TLength> = Globals | TLength | string;

export type PaddingBlockStartProperty<TLength> = Globals | TLength | string;

export type PaddingBottomProperty<TLength> = Globals | TLength | string;

export type PaddingInlineProperty<TLength> = Globals | TLength | string;

export type PaddingInlineEndProperty<TLength> = Globals | TLength | string;

export type PaddingInlineStartProperty<TLength> = Globals | TLength | string;

export type PaddingLeftProperty<TLength> = Globals | TLength | string;

export type PaddingRightProperty<TLength> = Globals | TLength | string;

export type PaddingTopProperty<TLength> = Globals | TLength | string;

export type PageBreakAfterProperty =
  | Globals
  | "always"
  | "auto"
  | "avoid"
  | "left"
  | "recto"
  | "right"
  | "verso";

export type PageBreakBeforeProperty =
  | Globals
  | "always"
  | "auto"
  | "avoid"
  | "left"
  | "recto"
  | "right"
  | "verso";

export type PageBreakInsideProperty = Globals | "auto" | "avoid";

export type PaintOrderProperty =
  | Globals
  | "fill"
  | "markers"
  | "normal"
  | "stroke"
  | string;

export type PerspectiveProperty<TLength> = Globals | TLength | "none";

export type PerspectiveOriginProperty<TLength> = Globals | Position<TLength>;

export type PlaceContentProperty =
  | Globals
  | ContentDistribution
  | ContentPosition
  | "baseline"
  | "normal"
  | string;

export type PlaceItemsProperty =
  | Globals
  | SelfPosition
  | "baseline"
  | "normal"
  | "stretch"
  | string;

export type PlaceSelfProperty =
  | Globals
  | SelfPosition
  | "auto"
  | "baseline"
  | "normal"
  | "stretch"
  | string;

export type PointerEventsProperty =
  | Globals
  | "all"
  | "auto"
  | "fill"
  | "inherit"
  | "none"
  | "painted"
  | "stroke"
  | "visible"
  | "visibleFill"
  | "visiblePainted"
  | "visibleStroke";

export type PositionProperty =
  | Globals
  | "-webkit-sticky"
  | "absolute"
  | "fixed"
  | "relative"
  | "static"
  | "sticky";

export type QuotesProperty = Globals | "auto" | "none" | string;

export type ResizeProperty =
  | Globals
  | "block"
  | "both"
  | "horizontal"
  | "inline"
  | "none"
  | "vertical";

export type RightProperty<TLength> = Globals | TLength | "auto" | string;

export type RotateProperty = Globals | "none" | string;

export type RowGapProperty<TLength> = Globals | TLength | "normal" | string;

export type RubyAlignProperty =
  | Globals
  | "center"
  | "space-around"
  | "space-between"
  | "start";

export type RubyMergeProperty = Globals | "auto" | "collapse" | "separate";

export type RubyPositionProperty = Globals | "over" | "under";

export type ScaleProperty = Globals | "none" | string | number;

export type ScrollBehaviorProperty = Globals | "auto" | "smooth";

export type ScrollMarginProperty<TLength> = Globals | TLength | string;

export type ScrollMarginBlockProperty<TLength> = Globals | TLength | string;

export type ScrollMarginBlockEndProperty<TLength> = Globals | TLength;

export type ScrollMarginBlockStartProperty<TLength> = Globals | TLength;

export type ScrollMarginBottomProperty<TLength> = Globals | TLength;

export type ScrollMarginInlineProperty<TLength> = Globals | TLength | string;

export type ScrollMarginInlineEndProperty<TLength> = Globals | TLength;

export type ScrollMarginInlineStartProperty<TLength> = Globals | TLength;

export type ScrollMarginLeftProperty<TLength> = Globals | TLength;

export type ScrollMarginRightProperty<TLength> = Globals | TLength;

export type ScrollMarginTopProperty<TLength> = Globals | TLength;

export type ScrollPaddingProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingBlockProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingBlockEndProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingBlockStartProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingBottomProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingInlineProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingInlineEndProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingInlineStartProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingLeftProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingRightProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollPaddingTopProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | string;

export type ScrollSnapAlignProperty =
  | Globals
  | "center"
  | "end"
  | "none"
  | "start"
  | string;

export type ScrollSnapCoordinateProperty<TLength> =
  | Globals
  | Position<TLength>
  | "none"
  | string;

export type ScrollSnapDestinationProperty<TLength> =
  | Globals
  | Position<TLength>;

export type ScrollSnapPointsXProperty = Globals | "none" | string;

export type ScrollSnapPointsYProperty = Globals | "none" | string;

export type ScrollSnapStopProperty = Globals | "always" | "normal";

export type ScrollSnapTypeProperty =
  | Globals
  | "block"
  | "both"
  | "inline"
  | "none"
  | "x"
  | "y"
  | string;

export type ScrollSnapTypeXProperty =
  | Globals
  | "mandatory"
  | "none"
  | "proximity";

export type ScrollSnapTypeYProperty =
  | Globals
  | "mandatory"
  | "none"
  | "proximity";

export type ScrollbarColorProperty =
  | Globals
  | Color
  | "auto"
  | "dark"
  | "light";

export type MsScrollbarTrackColorProperty = Globals | Color;

export type ScrollbarWidthProperty = Globals | "auto" | "none" | "thin";

export type ShapeImageThresholdProperty = Globals | string | number;

export type ShapeMarginProperty<TLength> = Globals | TLength | string;

export type ShapeOutsideProperty =
  | Globals
  | Box
  | "margin-box"
  | "none"
  | string;

export type TabSizeProperty<TLength> = Globals | TLength | number;

export type TableLayoutProperty = Globals | "auto" | "fixed";

export type TextAlignProperty =
  | Globals
  | "center"
  | "end"
  | "justify"
  | "left"
  | "match-parent"
  | "right"
  | "start";

export type TextAlignLastProperty =
  | Globals
  | "auto"
  | "center"
  | "end"
  | "justify"
  | "left"
  | "right"
  | "start";

export type TextCombineUprightProperty =
  | Globals
  | "all"
  | "digits"
  | "none"
  | string;

export type TextDecorationProperty<TLength> =
  | Globals
  | Color
  | TLength
  | "auto"
  | "blink"
  | "dashed"
  | "dotted"
  | "double"
  | "from-font"
  | "grammar-error"
  | "line-through"
  | "none"
  | "overline"
  | "solid"
  | "spelling-error"
  | "underline"
  | "wavy"
  | string;

export type TextDecorationColorProperty = Globals | Color;

export type TextDecorationLineProperty =
  | Globals
  | "blink"
  | "grammar-error"
  | "line-through"
  | "none"
  | "overline"
  | "spelling-error"
  | "underline"
  | string;

export type TextDecorationSkipProperty =
  | Globals
  | "box-decoration"
  | "edges"
  | "leading-spaces"
  | "none"
  | "objects"
  | "spaces"
  | "trailing-spaces"
  | string;

export type TextDecorationSkipInkProperty = Globals | "all" | "auto" | "none";

export type TextDecorationStyleProperty =
  | Globals
  | "dashed"
  | "dotted"
  | "double"
  | "solid"
  | "wavy";

export type TextDecorationThicknessProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | "from-font"
  | string;

export type TextEmphasisProperty =
  | Globals
  | Color
  | "circle"
  | "dot"
  | "double-circle"
  | "filled"
  | "none"
  | "open"
  | "sesame"
  | "triangle"
  | string;

export type TextEmphasisColorProperty = Globals | Color;

export type TextEmphasisStyleProperty =
  | Globals
  | "circle"
  | "dot"
  | "double-circle"
  | "filled"
  | "none"
  | "open"
  | "sesame"
  | "triangle"
  | string;

export type TextIndentProperty<TLength> = Globals | TLength | string;

export type TextJustifyProperty =
  | Globals
  | "auto"
  | "inter-character"
  | "inter-word"
  | "none";

export type TextOrientationProperty =
  | Globals
  | "mixed"
  | "sideways"
  | "upright";

export type TextOverflowProperty = Globals | "clip" | "ellipsis" | string;

export type TextRenderingProperty =
  | Globals
  | "auto"
  | "geometricPrecision"
  | "optimizeLegibility"
  | "optimizeSpeed";

export type TextShadowProperty = Globals | "none" | string;

export type TextSizeAdjustProperty = Globals | "auto" | "none" | string;

export type TextTransformProperty =
  | Globals
  | "capitalize"
  | "full-size-kana"
  | "full-width"
  | "lowercase"
  | "none"
  | "uppercase";

export type TextUnderlineOffsetProperty<TLength> =
  | Globals
  | TLength
  | "auto"
  | "from-font"
  | string;

export type TextUnderlinePositionProperty =
  | Globals
  | "auto"
  | "from-font"
  | "left"
  | "right"
  | "under"
  | string;

export type TopProperty<TLength> = Globals | TLength | "auto" | string;

export type TouchActionProperty =
  | Globals
  | "-ms-manipulation"
  | "-ms-none"
  | "-ms-pinch-zoom"
  | "auto"
  | "manipulation"
  | "none"
  | "pan-down"
  | "pan-left"
  | "pan-right"
  | "pan-up"
  | "pan-x"
  | "pan-y"
  | "pinch-zoom"
  | string;

export type TransformProperty = Globals | "none" | string;

export type TransformBoxProperty =
  | Globals
  | "border-box"
  | "fill-box"
  | "view-box";

export type TransformOriginProperty<TLength> =
  | Globals
  | TLength
  | "bottom"
  | "center"
  | "left"
  | "right"
  | "top"
  | string;

export type TransformStyleProperty = Globals | "flat" | "preserve-3d";

export type TransitionProperty = Globals | SingleTransition | string;

export type TransitionPropertyProperty = Globals | "all" | "none" | string;

export type TransitionTimingFunctionProperty =
  | Globals
  | TimingFunction
  | string;

export type TranslateProperty<TLength> = Globals | TLength | "none" | string;

export type UnicodeBidiProperty =
  | Globals
  | "-moz-isolate"
  | "-moz-isolate-override"
  | "-moz-plaintext"
  | "-webkit-isolate"
  | "bidi-override"
  | "embed"
  | "isolate"
  | "isolate-override"
  | "normal"
  | "plaintext";

export type UserSelectProperty =
  | Globals
  | "-moz-none"
  | "all"
  | "auto"
  | "contain"
  | "element"
  | "none"
  | "text";

export type VerticalAlignProperty<TLength> =
  | Globals
  | TLength
  | "baseline"
  | "bottom"
  | "middle"
  | "sub"
  | "super"
  | "text-bottom"
  | "text-top"
  | "top"
  | string;

export type VisibilityProperty = Globals | "collapse" | "hidden" | "visible";

export type WhiteSpaceProperty =
  | Globals
  | "-moz-pre-wrap"
  | "break-spaces"
  | "normal"
  | "nowrap"
  | "pre"
  | "pre-line"
  | "pre-wrap";

export type WidthProperty<TLength> =
  | Globals
  | TLength
  | "-moz-max-content"
  | "-moz-min-content"
  | "-webkit-max-content"
  | "auto"
  | "intrinsic"
  | "max-content"
  | "min-content"
  | "min-intrinsic"
  | string;

export type WillChangeProperty = Globals | AnimateableFeature | "auto" | string;

export type WordBreakProperty =
  | Globals
  | "break-all"
  | "break-word"
  | "keep-all"
  | "normal";

export type WordSpacingProperty<TLength> =
  | Globals
  | TLength
  | "normal"
  | string;

export type WordWrapProperty = Globals | "break-word" | "normal";

export type WritingModeProperty =
  | Globals
  | "horizontal-tb"
  | "sideways-lr"
  | "sideways-rl"
  | "vertical-lr"
  | "vertical-rl";

export type ZIndexProperty = Globals | "auto" | number;

export type ZoomProperty = Globals | "normal" | "reset" | string | number;

export type MozAppearanceProperty =
  | Globals
  | "-moz-mac-unified-toolbar"
  | "-moz-win-borderless-glass"
  | "-moz-win-browsertabbar-toolbox"
  | "-moz-win-communications-toolbox"
  | "-moz-win-communicationstext"
  | "-moz-win-exclude-glass"
  | "-moz-win-glass"
  | "-moz-win-media-toolbox"
  | "-moz-win-mediatext"
  | "-moz-window-button-box"
  | "-moz-window-button-box-maximized"
  | "-moz-window-button-close"
  | "-moz-window-button-maximize"
  | "-moz-window-button-minimize"
  | "-moz-window-button-restore"
  | "-moz-window-frame-bottom"
  | "-moz-window-frame-left"
  | "-moz-window-frame-right"
  | "-moz-window-titlebar"
  | "-moz-window-titlebar-maximized"
  | "button"
  | "button-arrow-down"
  | "button-arrow-next"
  | "button-arrow-previous"
  | "button-arrow-up"
  | "button-bevel"
  | "button-focus"
  | "caret"
  | "checkbox"
  | "checkbox-container"
  | "checkbox-label"
  | "checkmenuitem"
  | "dualbutton"
  | "groupbox"
  | "listbox"
  | "listitem"
  | "menuarrow"
  | "menubar"
  | "menucheckbox"
  | "menuimage"
  | "menuitem"
  | "menuitemtext"
  | "menulist"
  | "menulist-button"
  | "menulist-text"
  | "menulist-textfield"
  | "menupopup"
  | "menuradio"
  | "menuseparator"
  | "meterbar"
  | "meterchunk"
  | "none"
  | "progressbar"
  | "progressbar-vertical"
  | "progresschunk"
  | "progresschunk-vertical"
  | "radio"
  | "radio-container"
  | "radio-label"
  | "radiomenuitem"
  | "range"
  | "range-thumb"
  | "resizer"
  | "resizerpanel"
  | "scale-horizontal"
  | "scale-vertical"
  | "scalethumb-horizontal"
  | "scalethumb-vertical"
  | "scalethumbend"
  | "scalethumbstart"
  | "scalethumbtick"
  | "scrollbarbutton-down"
  | "scrollbarbutton-left"
  | "scrollbarbutton-right"
  | "scrollbarbutton-up"
  | "scrollbarthumb-horizontal"
  | "scrollbarthumb-vertical"
  | "scrollbartrack-horizontal"
  | "scrollbartrack-vertical"
  | "searchfield"
  | "separator"
  | "sheet"
  | "spinner"
  | "spinner-downbutton"
  | "spinner-textfield"
  | "spinner-upbutton"
  | "splitter"
  | "statusbar"
  | "statusbarpanel"
  | "tab"
  | "tab-scroll-arrow-back"
  | "tab-scroll-arrow-forward"
  | "tabpanel"
  | "tabpanels"
  | "textfield"
  | "textfield-multiline"
  | "toolbar"
  | "toolbarbutton"
  | "toolbarbutton-dropdown"
  | "toolbargripper"
  | "toolbox"
  | "tooltip"
  | "treeheader"
  | "treeheadercell"
  | "treeheadersortarrow"
  | "treeitem"
  | "treeline"
  | "treetwisty"
  | "treetwistyopen"
  | "treeview";

export type MozBindingProperty = Globals | "none" | string;

export type MozBorderBottomColorsProperty = Globals | Color | "none" | string;

export type MozBorderLeftColorsProperty = Globals | Color | "none" | string;

export type MozBorderRightColorsProperty = Globals | Color | "none" | string;

export type MozBorderTopColorsProperty = Globals | Color | "none" | string;

export type MozContextPropertiesProperty =
  | Globals
  | "fill"
  | "fill-opacity"
  | "none"
  | "stroke"
  | "stroke-opacity"
  | string;

export type MozFloatEdgeProperty =
  | Globals
  | "border-box"
  | "content-box"
  | "margin-box"
  | "padding-box";

export type MozImageRegionProperty = Globals | "auto" | string;

export type MozOrientProperty =
  | Globals
  | "block"
  | "horizontal"
  | "inline"
  | "vertical";

export type MozOutlineRadiusProperty<TLength> = Globals | TLength | string;

export type MozOutlineRadiusBottomleftProperty<TLength> =
  | Globals
  | TLength
  | string;

export type MozOutlineRadiusBottomrightProperty<TLength> =
  | Globals
  | TLength
  | string;

export type MozOutlineRadiusTopleftProperty<TLength> =
  | Globals
  | TLength
  | string;

export type MozOutlineRadiusToprightProperty<TLength> =
  | Globals
  | TLength
  | string;

export type MozStackSizingProperty = Globals | "ignore" | "stretch-to-fit";

export type MozTextBlinkProperty = Globals | "blink" | "none";

export type MozUserFocusProperty =
  | Globals
  | "ignore"
  | "none"
  | "normal"
  | "select-after"
  | "select-all"
  | "select-before"
  | "select-menu"
  | "select-same";

export type MozUserInputProperty =
  | Globals
  | "auto"
  | "disabled"
  | "enabled"
  | "none";

export type MozUserModifyProperty =
  | Globals
  | "read-only"
  | "read-write"
  | "write-only";

export type MozWindowDraggingProperty = Globals | "drag" | "no-drag";

export type MozWindowShadowProperty =
  | Globals
  | "default"
  | "menu"
  | "none"
  | "sheet"
  | "tooltip";

export type MsAcceleratorProperty = Globals | "false" | "true";

export type MsBlockProgressionProperty = Globals | "bt" | "lr" | "rl" | "tb";

export type MsContentZoomChainingProperty = Globals | "chained" | "none";

export type MsContentZoomSnapProperty =
  | Globals
  | "mandatory"
  | "none"
  | "proximity"
  | string;

export type MsContentZoomSnapTypeProperty =
  | Globals
  | "mandatory"
  | "none"
  | "proximity";

export type MsContentZoomingProperty = Globals | "none" | "zoom";

export type MsFlowFromProperty = Globals | "none" | string;

export type MsFlowIntoProperty = Globals | "none" | string;

export type MsHighContrastAdjustProperty = Globals | "auto" | "none";

export type MsHyphenateLimitCharsProperty = Globals | "auto" | string | number;

export type MsHyphenateLimitLinesProperty = Globals | "no-limit" | number;

export type MsHyphenateLimitZoneProperty<TLength> = Globals | TLength | string;

export type MsImeAlignProperty = Globals | "after" | "auto";

export type MsOverflowStyleProperty =
  | Globals
  | "-ms-autohiding-scrollbar"
  | "auto"
  | "none"
  | "scrollbar";

export type MsScrollChainingProperty = Globals | "chained" | "none";

export type MsScrollLimitXMaxProperty<TLength> = Globals | TLength | "auto";

export type MsScrollLimitXMinProperty<TLength> = Globals | TLength;

export type MsScrollLimitYMaxProperty<TLength> = Globals | TLength | "auto";

export type MsScrollLimitYMinProperty<TLength> = Globals | TLength;

export type MsScrollRailsProperty = Globals | "none" | "railed";

export type MsScrollSnapTypeProperty =
  | Globals
  | "mandatory"
  | "none"
  | "proximity";

export type MsScrollTranslationProperty =
  | Globals
  | "none"
  | "vertical-to-horizontal";

export type MsScrollbar3dlightColorProperty = Globals | Color;

export type MsScrollbarArrowColorProperty = Globals | Color;

export type MsScrollbarBaseColorProperty = Globals | Color;

export type MsScrollbarDarkshadowColorProperty = Globals | Color;

export type MsScrollbarFaceColorProperty = Globals | Color;

export type MsScrollbarHighlightColorProperty = Globals | Color;

export type MsScrollbarShadowColorProperty = Globals | Color;

export type MsTextAutospaceProperty =
  | Globals
  | "ideograph-alpha"
  | "ideograph-numeric"
  | "ideograph-parenthesis"
  | "ideograph-space"
  | "none";

export type MsTouchSelectProperty = Globals | "grippers" | "none";

export type MsUserSelectProperty = Globals | "element" | "none" | "text";

export type MsWrapFlowProperty =
  | Globals
  | "auto"
  | "both"
  | "clear"
  | "end"
  | "maximum"
  | "start";

export type MsWrapMarginProperty<TLength> = Globals | TLength;

export type MsWrapThroughProperty = Globals | "none" | "wrap";

export type WebkitAppearanceProperty =
  | Globals
  | "button"
  | "button-bevel"
  | "caret"
  | "checkbox"
  | "default-button"
  | "inner-spin-button"
  | "listbox"
  | "listitem"
  | "media-controls-background"
  | "media-controls-fullscreen-background"
  | "media-current-time-display"
  | "media-enter-fullscreen-button"
  | "media-exit-fullscreen-button"
  | "media-fullscreen-button"
  | "media-mute-button"
  | "media-overlay-play-button"
  | "media-play-button"
  | "media-seek-back-button"
  | "media-seek-forward-button"
  | "media-slider"
  | "media-sliderthumb"
  | "media-time-remaining-display"
  | "media-toggle-closed-captions-button"
  | "media-volume-slider"
  | "media-volume-slider-container"
  | "media-volume-sliderthumb"
  | "menulist"
  | "menulist-button"
  | "menulist-text"
  | "menulist-textfield"
  | "meter"
  | "none"
  | "progress-bar"
  | "progress-bar-value"
  | "push-button"
  | "radio"
  | "searchfield"
  | "searchfield-cancel-button"
  | "searchfield-decoration"
  | "searchfield-results-button"
  | "searchfield-results-decoration"
  | "slider-horizontal"
  | "slider-vertical"
  | "sliderthumb-horizontal"
  | "sliderthumb-vertical"
  | "square-button"
  | "textarea"
  | "textfield";

export type WebkitBorderBeforeProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | LineStyle
  | Color
  | string;

export type WebkitBorderBeforeColorProperty = Globals | Color;

export type WebkitBorderBeforeStyleProperty = Globals | LineStyle | string;

export type WebkitBorderBeforeWidthProperty<TLength> =
  | Globals
  | LineWidth<TLength>
  | string;

export type WebkitBoxReflectProperty<TLength> =
  | Globals
  | TLength
  | "above"
  | "below"
  | "left"
  | "right"
  | string;

export type WebkitLineClampProperty = Globals | "none" | number;

export type WebkitMaskProperty<TLength> =
  | Globals
  | Position<TLength>
  | RepeatStyle
  | Box
  | "border"
  | "content"
  | "none"
  | "padding"
  | "text"
  | string;

export type WebkitMaskAttachmentProperty = Globals | Attachment | string;

export type WebkitMaskClipProperty =
  | Globals
  | Box
  | "border"
  | "content"
  | "padding"
  | "text"
  | string;

export type WebkitMaskCompositeProperty = Globals | CompositeStyle | string;

export type WebkitMaskImageProperty = Globals | "none" | string;

export type WebkitMaskOriginProperty =
  | Globals
  | Box
  | "border"
  | "content"
  | "padding"
  | string;

export type WebkitMaskPositionProperty<TLength> =
  | Globals
  | Position<TLength>
  | string;

export type WebkitMaskPositionXProperty<TLength> =
  | Globals
  | TLength
  | "center"
  | "left"
  | "right"
  | string;

export type WebkitMaskPositionYProperty<TLength> =
  | Globals
  | TLength
  | "bottom"
  | "center"
  | "top"
  | string;

export type WebkitMaskRepeatProperty = Globals | RepeatStyle | string;

export type WebkitMaskRepeatXProperty =
  | Globals
  | "no-repeat"
  | "repeat"
  | "round"
  | "space";

export type WebkitMaskRepeatYProperty =
  | Globals
  | "no-repeat"
  | "repeat"
  | "round"
  | "space";

export type WebkitMaskSizeProperty<TLength> =
  | Globals
  | BgSize<TLength>
  | string;

export type WebkitOverflowScrollingProperty = Globals | "auto" | "touch";

export type WebkitTapHighlightColorProperty = Globals | Color;

export type WebkitTextFillColorProperty = Globals | Color;

export type WebkitTextStrokeProperty<TLength> =
  | Globals
  | Color
  | TLength
  | string;

export type WebkitTextStrokeColorProperty = Globals | Color;

export type WebkitTextStrokeWidthProperty<TLength> = Globals | TLength;

export type WebkitTouchCalloutProperty = Globals | "default" | "none";

export type WebkitUserModifyProperty =
  | Globals
  | "read-only"
  | "read-write"
  | "read-write-plaintext-only";

export type AlignmentBaselineProperty =
  | Globals
  | "after-edge"
  | "alphabetic"
  | "auto"
  | "baseline"
  | "before-edge"
  | "central"
  | "hanging"
  | "ideographic"
  | "mathematical"
  | "middle"
  | "text-after-edge"
  | "text-before-edge";

export type BaselineShiftProperty<TLength> =
  | Globals
  | TLength
  | "baseline"
  | "sub"
  | "super"
  | string;

export type ClipRuleProperty = Globals | "evenodd" | "nonzero";

export type ColorInterpolationProperty =
  | Globals
  | "auto"
  | "linearRGB"
  | "sRGB";

export type ColorRenderingProperty =
  | Globals
  | "auto"
  | "optimizeQuality"
  | "optimizeSpeed";

export type DominantBaselineProperty =
  | Globals
  | "alphabetic"
  | "auto"
  | "central"
  | "hanging"
  | "ideographic"
  | "mathematical"
  | "middle"
  | "no-change"
  | "reset-size"
  | "text-after-edge"
  | "text-before-edge"
  | "use-script";

export type FillProperty = Globals | Paint;

export type FillRuleProperty = Globals | "evenodd" | "nonzero";

export type FloodColorProperty = Globals | Color | "currentColor";

export type GlyphOrientationVerticalProperty =
  | Globals
  | "auto"
  | string
  | number;

export type LightingColorProperty = Globals | Color | "currentColor";

export type MarkerProperty = Globals | "none" | string;

export type MarkerEndProperty = Globals | "none" | string;

export type MarkerMidProperty = Globals | "none" | string;

export type MarkerStartProperty = Globals | "none" | string;

export type ShapeRenderingProperty =
  | Globals
  | "auto"
  | "crispEdges"
  | "geometricPrecision"
  | "optimizeSpeed";

export type StopColorProperty = Globals | Color | "currentColor";

export type StrokeProperty = Globals | Paint;

export type StrokeDasharrayProperty<TLength> =
  | Globals
  | Dasharray<TLength>
  | "none";

export type StrokeDashoffsetProperty<TLength> = Globals | TLength | string;

export type StrokeLinecapProperty = Globals | "butt" | "round" | "square";

export type StrokeLinejoinProperty = Globals | "bevel" | "miter" | "round";

export type StrokeWidthProperty<TLength> = Globals | TLength | string;

export type TextAnchorProperty = Globals | "end" | "middle" | "start";

export type VectorEffectProperty = Globals | "non-scaling-stroke" | "none";

type CounterStyleRangeProperty = "auto" | "infinite" | string | number;

type CounterStyleSpeakAsProperty =
  | "auto"
  | "bullets"
  | "numbers"
  | "spell-out"
  | "words"
  | string;

type CounterStyleSystemProperty =
  | "additive"
  | "alphabetic"
  | "cyclic"
  | "fixed"
  | "numeric"
  | "symbolic"
  | string;

type FontFaceFontFeatureSettingsProperty = "normal" | string;

type FontFaceFontDisplayProperty =
  | "auto"
  | "block"
  | "fallback"
  | "optional"
  | "swap";

type FontFaceFontStretchProperty = FontStretchAbsolute | string;

type FontFaceFontStyleProperty = "italic" | "normal" | "oblique" | string;

type FontFaceFontVariantProperty =
  | EastAsianVariantValues
  | "all-petite-caps"
  | "all-small-caps"
  | "common-ligatures"
  | "contextual"
  | "diagonal-fractions"
  | "discretionary-ligatures"
  | "full-width"
  | "historical-forms"
  | "historical-ligatures"
  | "lining-nums"
  | "no-common-ligatures"
  | "no-contextual"
  | "no-discretionary-ligatures"
  | "no-historical-ligatures"
  | "none"
  | "normal"
  | "oldstyle-nums"
  | "ordinal"
  | "petite-caps"
  | "proportional-nums"
  | "proportional-width"
  | "ruby"
  | "slashed-zero"
  | "small-caps"
  | "stacked-fractions"
  | "tabular-nums"
  | "titling-caps"
  | "unicase"
  | string;

type FontFaceFontVariationSettingsProperty = "normal" | string;

type FontFaceFontWeightProperty = FontWeightAbsolute | string;

type ViewportHeightProperty<TLength> = ViewportLength<TLength> | string;

type ViewportMaxHeightProperty<TLength> = ViewportLength<TLength>;

type ViewportMaxWidthProperty<TLength> = ViewportLength<TLength>;

type ViewportMaxZoomProperty = "auto" | string | number;

type ViewportMinHeightProperty<TLength> = ViewportLength<TLength>;

type ViewportMinWidthProperty<TLength> = ViewportLength<TLength>;

type ViewportMinZoomProperty = "auto" | string | number;

type ViewportOrientationProperty = "auto" | "landscape" | "portrait";

type ViewportUserZoomProperty = "-ms-zoom" | "fixed" | "zoom";

type ViewportWidthProperty<TLength> = ViewportLength<TLength> | string;

type ViewportZoomProperty = "auto" | string | number;

type AbsoluteSize =
  | "large"
  | "medium"
  | "small"
  | "x-large"
  | "x-small"
  | "xx-large"
  | "xx-small"
  | "xxx-large";

type AnimateableFeature = "contents" | "scroll-position" | string;

type Attachment = "fixed" | "local" | "scroll";

type BgPosition<TLength> =
  | TLength
  | "bottom"
  | "center"
  | "left"
  | "right"
  | "top"
  | string;

type BgSize<TLength> = TLength | "auto" | "contain" | "cover" | string;

type BlendMode =
  | "color"
  | "color-burn"
  | "color-dodge"
  | "darken"
  | "difference"
  | "exclusion"
  | "hard-light"
  | "hue"
  | "lighten"
  | "luminosity"
  | "multiply"
  | "normal"
  | "overlay"
  | "saturation"
  | "screen"
  | "soft-light";

type Box = "border-box" | "content-box" | "padding-box";

type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | string;

type Compat =
  | "button-bevel"
  | "checkbox"
  | "listbox"
  | "menulist"
  | "menulist-button"
  | "meter"
  | "progress-bar"
  | "push-button"
  | "radio"
  | "searchfield"
  | "slider-horizontal"
  | "square-button"
  | "textarea";

type CompositeStyle =
  | "clear"
  | "copy"
  | "destination-atop"
  | "destination-in"
  | "destination-out"
  | "destination-over"
  | "source-atop"
  | "source-in"
  | "source-out"
  | "source-over"
  | "xor";

type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

type ContentDistribution =
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "stretch";

type ContentList = Quote | "contents" | string;

type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

type CubicBezierTimingFunction =
  | "ease"
  | "ease-in"
  | "ease-in-out"
  | "ease-out"
  | string;

type Dasharray<TLength> = TLength | string | number;

type DeprecatedSystemColor =
  | "ActiveBorder"
  | "ActiveCaption"
  | "AppWorkspace"
  | "Background"
  | "ButtonFace"
  | "ButtonHighlight"
  | "ButtonShadow"
  | "ButtonText"
  | "CaptionText"
  | "GrayText"
  | "Highlight"
  | "HighlightText"
  | "InactiveBorder"
  | "InactiveCaption"
  | "InactiveCaptionText"
  | "InfoBackground"
  | "InfoText"
  | "Menu"
  | "MenuText"
  | "Scrollbar"
  | "ThreeDDarkShadow"
  | "ThreeDFace"
  | "ThreeDHighlight"
  | "ThreeDLightShadow"
  | "ThreeDShadow"
  | "Window"
  | "WindowFrame"
  | "WindowText";

type DisplayInside =
  | "-ms-flexbox"
  | "-ms-grid"
  | "-webkit-flex"
  | "flex"
  | "flow"
  | "flow-root"
  | "grid"
  | "ruby"
  | "table";

type DisplayInternal =
  | "ruby-base"
  | "ruby-base-container"
  | "ruby-text"
  | "ruby-text-container"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row"
  | "table-row-group";

type DisplayLegacy =
  | "-ms-inline-flexbox"
  | "-ms-inline-grid"
  | "-webkit-inline-flex"
  | "inline-block"
  | "inline-flex"
  | "inline-grid"
  | "inline-list-item"
  | "inline-table";

type DisplayOutside = "block" | "inline" | "run-in";

type EastAsianVariantValues =
  | "jis04"
  | "jis78"
  | "jis83"
  | "jis90"
  | "simplified"
  | "traditional";

type FinalBgLayer<TLength> =
  | Color
  | BgPosition<TLength>
  | RepeatStyle
  | Attachment
  | Box
  | "none"
  | string;

type FontStretchAbsolute =
  | "condensed"
  | "expanded"
  | "extra-condensed"
  | "extra-expanded"
  | "normal"
  | "semi-condensed"
  | "semi-expanded"
  | "ultra-condensed"
  | "ultra-expanded"
  | string;

type FontWeightAbsolute = "bold" | "normal" | number;

type GenericFamily =
  | "cursive"
  | "fantasy"
  | "monospace"
  | "sans-serif"
  | "serif";

type GeometryBox = Box | "fill-box" | "margin-box" | "stroke-box" | "view-box";

type GridLine = "auto" | string | number;

type LineStyle =
  | "dashed"
  | "dotted"
  | "double"
  | "groove"
  | "hidden"
  | "inset"
  | "none"
  | "outset"
  | "ridge"
  | "solid";

type LineWidth<TLength> = TLength | "medium" | "thick" | "thin";

type MaskLayer<TLength> =
  | Position<TLength>
  | RepeatStyle
  | GeometryBox
  | CompositingOperator
  | MaskingMode
  | "no-clip"
  | "none"
  | string;

type MaskingMode = "alpha" | "luminance" | "match-source";

type NamedColor =
  | "aliceblue"
  | "antiquewhite"
  | "aqua"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "black"
  | "blanchedalmond"
  | "blue"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkgrey"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkslategrey"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dimgrey"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "fuchsia"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "gray"
  | "green"
  | "greenyellow"
  | "grey"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "lightgrey"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightslategrey"
  | "lightsteelblue"
  | "lightyellow"
  | "lime"
  | "limegreen"
  | "linen"
  | "magenta"
  | "maroon"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvioletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "navy"
  | "oldlace"
  | "olive"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "purple"
  | "rebeccapurple"
  | "red"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "silver"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "slategrey"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "teal"
  | "thistle"
  | "tomato"
  | "transparent"
  | "turquoise"
  | "violet"
  | "wheat"
  | "white"
  | "whitesmoke"
  | "yellow"
  | "yellowgreen";

type Paint =
  | Color
  | "child"
  | "context-fill"
  | "context-stroke"
  | "none"
  | string;

type Position<TLength> =
  | TLength
  | "bottom"
  | "center"
  | "left"
  | "right"
  | "top"
  | string;

type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

type RepeatStyle =
  | "no-repeat"
  | "repeat"
  | "repeat-x"
  | "repeat-y"
  | "round"
  | "space"
  | string;

type SelfPosition =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "self-end"
  | "self-start"
  | "start";

type SingleAnimation =
  | TimingFunction
  | SingleAnimationDirection
  | SingleAnimationFillMode
  | "infinite"
  | "none"
  | "paused"
  | "running"
  | string
  | number;

type SingleAnimationDirection =
  | "alternate"
  | "alternate-reverse"
  | "normal"
  | "reverse";

type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

type SingleTransition = TimingFunction | "all" | "none" | string;

type StepTimingFunction = "step-end" | "step-start" | string;

type TimingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear";

type TrackBreadth<TLength> =
  | TLength
  | "auto"
  | "max-content"
  | "min-content"
  | string;

type ViewportLength<TLength> = TLength | "auto" | string;
