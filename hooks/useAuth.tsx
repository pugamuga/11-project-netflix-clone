import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
  
} from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import {
  User,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRecoilState } from "recoil";
import { signUpAtom } from "../atoms/modalAtom";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IAuth {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const router = useRouter();
  const [signUpComponent, setSignUpComponent] = useRecoilState(signUpAtom)



  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
        if (user){
            setUser(user)
            setLoading(false)
        } else {
            setUser(null)
            setLoading(true)
            router.push("/login")
        }
        setInitialLoading(false)
  })
  }, [auth]);

  const signUp = async (email: string, password: string) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => {
        setLoading(false);
      });
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = async () => {
    setLoading(true);
    setSignUpComponent(false)
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => alert(error.message))
      .finally(() => {
        setLoading(false);
      });
  };

  const memoValue = useMemo(
    () => ({
      user,
      signUp,
      signIn,
      error,
      loading,
      logout,
     
    }),
    [user, loading,error]
  );

  return <AuthContext.Provider value={memoValue}>{!initialLoading&& children}</AuthContext.Provider>;
};

export default function useAuth(){
    return useContext(AuthContext)
}