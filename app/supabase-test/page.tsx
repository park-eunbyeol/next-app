import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export default async function SupabaseTest() {
    const { data, error } = await supabase.from("_test_connection").select("*").limit(1);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
            {error ? (
                <div className="p-4 bg-red-100 text-red-700 rounded">
                    Error: {error.message}
                    <p className="text-sm mt-2 font-mono text-gray-600">
                        Note: This is expected if the '_test_connection' table doesn't exist yet,
                        but it confirms the client is initialized.
                    </p>
                </div>
            ) : (
                <div className="p-4 bg-green-100 text-green-700 rounded">
                    Successfully connected to Supabase!
                    <pre className="mt-2 text-xs">{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
