export const permissions = [
    {
        role: "user",
        actions: [
            "get_profile",
            "update_profile",
            "delete_profile",
        ]
    },

    {
        role: "tutor",
        actions: [
            "get_profile",
            "update_profile",
            "delete_profile",
            "create_course",
            "update_course",
            "delete_course",
        ]
    },

    {
        role: "admin",
        actions: ["*"]
    }
];