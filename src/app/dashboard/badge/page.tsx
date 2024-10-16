import { Badge } from "@/components/ui/badge"

export default function Page() {
    return (
        <div className="flex gap-4">
            <Badge capitalize>badge</Badge>
            <Badge variant="destructive">badge</Badge>
            <Badge variant="outline">badge</Badge>
            <Badge variant="info" capitalize >badge</Badge>
            <Badge variant="success" capitalize >badge</Badge>
        </div>
    );
}