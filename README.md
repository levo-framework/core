## Problems of React
- Local state from props (boilerplate, need to use useEffect to update)
- Performance optimizations requires manual tweak (useCallback, useMemo etc.)
- Unnecessary JSX syntax
- setState is not composable
- server-side rendering is hard

## Feature of this framework
- first-class support for server-side rendering
- only Typescript, no templating, no special syntax (e.g. JSX)
- no untyped magic (e.g. linking functions using string)
- user need not to perform low-level optimization (e.g. React.useMemo)
- DOM API should be very close to vanilla JS DOM API