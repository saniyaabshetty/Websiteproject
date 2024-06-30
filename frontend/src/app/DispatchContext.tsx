import { createContext, Dispatch } from 'react';

// Assuming your context value is of type 'any' for simplicity, replace it with your actual type.
type ContextValueType = any;

const DispatchContext = createContext<Dispatch<ContextValueType> | undefined>(undefined);

export default DispatchContext;
