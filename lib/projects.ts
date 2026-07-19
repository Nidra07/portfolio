import { supabase } from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) throw error;

  return data;
}

export async function getProject(id: number) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createProject(project: any) {
  const { error } = await supabase
    .from("projects")
    .insert(project);

  if (error) throw error;
}

export async function updateProject(id: number, project: any) {
  const { error } = await supabase
    .from("projects")
    .update(project)
    .eq("id", id);

  if (error) throw error;
}

export async function deleteProject(id: number) {
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (error) throw error;
}