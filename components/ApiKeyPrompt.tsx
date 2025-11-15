import React from 'react';

interface ApiKeyPromptProps {
    t: (key: string) => string;
}

const ApiKeyPrompt: React.FC<ApiKeyPromptProps> = ({ t }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#1A1A1A] px-4">
            <div className="max-w-2xl w-full bg-white dark:bg-[#2A2A2A] rounded-lg shadow-lg p-8 border border-yellow-500/50">
                <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <h1 className="mt-4 text-2xl font-bold font-poppins text-[#2C2C2C] dark:text-white">Configuration Needed</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Your Gemini API Key is missing. The application cannot connect to the backend services without it.
                    </p>
                </div>
                <div className="mt-6 text-left text-sm text-gray-700 dark:text-gray-200">
                   <p className="font-semibold mb-2">Please follow these steps to fix this:</p>
                   <ol className="list-decimal list-inside space-y-2">
                       <li>Go to your GitHub repository where you deployed this project.</li>
                       <li>Navigate to <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">Settings</code> &gt; <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">Secrets and variables</code> &gt; <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">Actions</code>.</li>
                       <li>Click the <strong className="text-[#4ECDC4]">"New repository secret"</strong> button.</li>
                       <li>For the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">Name</code>, enter exactly <strong className="text-[#4ECDC4]">API_KEY</strong>.</li>
                       <li>In the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">Secret</code> field, paste your Gemini API key.</li>
                       <li>Click <strong className="text-[#4ECDC4]">"Add secret"</strong>.</li>
                       <li>Finally, go back to the "Actions" tab in your repository and re-run the "Deploy to GitHub Pages" workflow to apply the new secret.</li>
                   </ol>
                </div>
                 <div className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
                    <p>After completing these steps, your deployed application will work correctly.</p>
                </div>
            </div>
        </div>
    );
};

export default ApiKeyPrompt;
