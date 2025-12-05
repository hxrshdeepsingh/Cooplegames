export const dynamic = "force-static";

import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 px-4">
            <div className="container max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full text-pink-500 mb-6">
                        <Shield className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Your secrets are safe with us (mostly because we don't collect them).
                    </p>
                </div>

                <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
                        <h3>1. Introduction</h3>
                        <p>
                            Welcome to CoopleGames! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
                        </p>

                        <h3>2. Information We Collect</h3>
                        <p>
                            Currently, CoopleGames is a static web application. We do not require you to create an account or provide personal information to play our games.
                        </p>
                        <ul>
                            <li><strong>Usage Data:</strong> We may collect anonymous usage data to understand how our games are being played and to improve the experience.</li>
                            <li><strong>Cookies:</strong> We use essential cookies to ensure the website functions correctly (e.g., remembering your theme preference).</li>
                        </ul>

                        <h3>3. How We Use Your Information</h3>
                        <p>
                            Since we collect minimal data, our use is limited to:
                        </p>
                        <ul>
                            <li>Maintaining and improving the website.</li>
                            <li>Analyzing trends to create better games.</li>
                        </ul>

                        <h3>4. Third-Party Services</h3>
                        <p>
                            We may use third-party services for analytics or hosting. These parties have their own privacy policies which we encourage you to review.
                        </p>

                        <h3>5. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at support@cooplegames.com.
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
