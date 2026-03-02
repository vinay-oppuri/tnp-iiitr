import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <div className="space-y-6 max-w-md">
                <div className="relative">
                    <h1 className="text-9xl font-extrabold text-primary/10 tracking-tighter">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-foreground">Not Found</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-tight">Oops! Reality glitch detected.</h2>
                    <p className="text-muted-foreground text-sm sm:text-base">
                        The page you are looking for seems to have vanished into the digital void. Let's get you back on track.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button asChild variant="default" className="w-full sm:w-auto">
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Return Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}