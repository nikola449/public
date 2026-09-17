### **Complete Code for** **src/components/project-form.tsx**

```
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClassName =
  "h-12 rounded-sm border-border bg-background px-4 text-sm focus-visible:ring-gold";
const labelClassName =
  "mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-foreground";

export function ProjectForm() {
  const [service, setService] = useState("Fencing");
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent