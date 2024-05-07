import { getServerSession } from "next-auth";
import Image from "next/image";
import photo from "../public/images/photo.jpg";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // recuperer la session du server
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      {/* <ProductCard /> */}
      {/* <Image src={photo} width={200} height={200} alt="" /> */}
      <Image
        src="https://images.unsplash.com/photo-1536245802005-4ac4ba836e84?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
