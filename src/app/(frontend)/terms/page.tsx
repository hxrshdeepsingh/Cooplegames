export const dynamic = "force-static";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollText } from "lucide-react";

export const metadata = {
    description: 'Read the terms and conditions for using CoupleGames. Learn about user responsibilities, content usage, and app guidelines.',
    title: 'Terms & Conditions – CoupleGames',
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 px-4">
            <div className="container max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-500 mb-6">
                        <ScrollText className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        The rules of the game (literally and figuratively).
                    </p>
                </div>

                <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
                        <h3>1. Acceptance of Terms</h3>
                        <p>
                            By accessing and using CoopleGames, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
                        </p>

                        <h3>2. Use of the Service</h3>
                        <p>
                            CoopleGames is provided for personal, non-commercial entertainment purposes. You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                        </p>

                        <h3>3. Intellectual Property</h3>
                        <p>
                            All content on this website, including text, graphics, logos, and game mechanics, is the property of CoopleGames or its content suppliers and is protected by international copyright laws.
                        </p>

                        <h3>4. Disclaimer of Warranties</h3>
                        <p>
                            The service is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the operation of the site or the information, content, or materials included on this site.
                        </p>

                        <h3>5. Limitation of Liability</h3>
                        <p>
                            CoopleGames shall not be liable for any damages of any kind arising from the use of this site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
                        </p>

                        <h3>6. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify these terms at any time. Your continued use of the site after any changes indicates your acceptance of the new Terms of Service.
                        </p>

                        <p className="text-sm text-slate-500 mt-8">
                            Last Updated: {new Date().toLocaleDateString()}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
