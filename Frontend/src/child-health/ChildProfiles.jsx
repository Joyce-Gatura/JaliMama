
import { useState } from "react";
import {
    CalendarDays,
    Plus,
    UserRound,
    Users,
    X,
    ArrowRight,
    Baby,
} from "lucide-react";

import "../styles/childprofiles.css";

const initialForm = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    sex: "",
    relationship: "",
};

function getLocalDate(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function getMinimumDate() {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    return getLocalDate(date);
}

function calculateAge(dateOfBirth) {
    const birthDate = new Date(`${dateOfBirth}T00:00:00`);
    const today = new Date();

    let months =
        (today.getFullYear() - birthDate.getFullYear()) * 12 +
        today.getMonth() -
        birthDate.getMonth();

    if (today.getDate() < birthDate.getDate()) {
        months--;
    }

    if (months < 0) return "Age unavailable";

    if (months < 1) {
        const days = Math.floor(
            (today - birthDate) / (1000 * 60 * 60 * 24)
        );

        return `${Math.max(days, 0)} days old`;
    }

    if (months < 24) {
        return `${months} ${months === 1 ? "month" : "months"} old`;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return remainingMonths
        ? `${years}y ${remainingMonths}m old`
        : `${years} ${years === 1 ? "year" : "years"} old`;
}

function formatDate(date) {
    if (!date) return "Not provided";

    return new Date(`${date}T00:00:00`).toLocaleDateString(
        "en-KE",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );
}

function ChildProfiles({
    children = [],
    selectedChildId,
    onSelectChild,
    onChildAdded,
}) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(initialForm);

    const selectedChild = children.find(
        (child) => child.id === selectedChildId
    );

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newChild = {
            id: `child-${Date.now()}`,
            ...formData,
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
        };

        onChildAdded(newChild);

        setFormData(initialForm);
        setShowForm(false);
    }

    function handleCancel() {
        setFormData(initialForm);
        setShowForm(false);
    }

    return (
        <section className="feature-panel child-profiles">

            {/* Header */}
            <div className="child-profiles-header">
                <div>
                    <span className="child-section-label">
                        CHILD HEALTH MANAGEMENT
                    </span>

                    <h2>My Children</h2>

                    <p>
                        Manage your children's profiles and access their
                        individual health information.
                    </p>
                </div>

                <button
                    type="button"
                    className="app-button app-button-primary child-add-button"
                    onClick={() => setShowForm(true)}
                >
                    <Plus size={17} />
                    Add Child
                </button>
            </div>

            {/* Registration form */}
            {showForm && (
                <div className="child-registration-panel">
                    <div className="child-form-header">
                        <div>
                            <h3>Register a Child</h3>
                            <p>
                                Enter the essential information to create a
                                child health profile.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="child-close-button"
                            onClick={handleCancel}
                            aria-label="Close registration form"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <form
                        className="child-registration-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="child-form-grid">

                            <div className="form-field">
                                <label htmlFor="firstName">
                                    First Name *
                                </label>

                                <input
                                    id="firstName"
                                    className="form-control"
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    maxLength={60}
                                    required
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="lastName">
                                    Last Name
                                </label>

                                <input
                                    id="lastName"
                                    className="form-control"
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    maxLength={60}
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="dateOfBirth">
                                    Date of Birth *
                                </label>

                                <input
                                    id="dateOfBirth"
                                    className="form-control"
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    min={getMinimumDate()}
                                    max={getLocalDate()}
                                    required
                                />

                                <small>
                                    Only children below five years can be registered
                                    in this section.
                                </small>
                            </div>

                            <div className="form-field">
                                <label htmlFor="sex">
                                    Sex *
                                </label>

                                <select
                                    id="sex"
                                    className="form-control"
                                    name="sex"
                                    value={formData.sex}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select sex</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                            </div>

                            <div className="form-field child-relationship-field">
                                <label htmlFor="relationship">
                                    Your Relationship to the Child *
                                </label>

                                <select
                                    id="relationship"
                                    className="form-control"
                                    name="relationship"
                                    value={formData.relationship}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select relationship</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Father">Father</option>
                                    <option value="Guardian">Guardian</option>
                                    <option value="Grandparent">Grandparent</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                        </div>

                        <div className="child-form-actions">
                            <button
                                type="button"
                                className="app-button child-cancel-button"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="app-button app-button-primary"
                            >
                                <Plus size={17} />
                                Create Child Profile
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Registered children */}
            <div className="child-profiles-count">
                <Users size={17} />

                <span>
                    {children.length}{" "}
                    {children.length === 1 ? "child" : "children"} registered
                </span>
            </div>

            {children.length === 0 ? (
                <div className="child-empty-state">
                    <div className="child-empty-icon">
                        <Baby size={30} />
                    </div>

                    <h3>No child profiles yet</h3>

                    <p>
                        Add your child's profile to start managing growth,
                        immunisation, and health records.
                    </p>

                    <button
                        type="button"
                        className="app-button app-button-primary"
                        onClick={() => setShowForm(true)}
                    >
                        <Plus size={17} />
                        Register Your First Child
                    </button>
                </div>
            ) : (
                <div className="child-profile-grid">
                    {children.map((child) => {
                        const isSelected = child.id === selectedChildId;

                        return (
                            <button
                                type="button"
                                key={child.id}
                                className={`child-profile-card ${isSelected ? "selected" : ""
                                    }`}
                                onClick={() => onSelectChild(child.id)}
                                aria-pressed={isSelected}
                            >
                                <div className="child-profile-top">
                                    <div className="child-avatar">
                                        {child.firstName.charAt(0).toUpperCase()}
                                    </div>

                                    {isSelected && (
                                        <span className="child-selected-label">
                                            Selected
                                        </span>
                                    )}
                                </div>

                                <h3>
                                    {child.firstName} {child.lastName}
                                </h3>

                                <p className="child-profile-age">
                                    {calculateAge(child.dateOfBirth)}
                                </p>

                                <div className="child-profile-meta">
                                    <span>
                                        <CalendarDays size={14} />
                                        {child.sex}
                                    </span>

                                    <span>
                                        <Users size={14} />
                                        {child.relationship}
                                    </span>
                                </div>

                                <span className="child-view-link">
                                    View health profile
                                    <ArrowRight size={15} />
                                </span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Selected child health profile */}
            {selectedChild && (
                <div className="selected-child-profile">
                    <div className="selected-child-heading">
                        <div className="child-avatar selected-avatar">
                            {selectedChild.firstName.charAt(0).toUpperCase()}
                        </div>

                        <div>
                            <span className="child-section-label">
                                CHILD HEALTH PROFILE
                            </span>

                            <h3>
                                {selectedChild.firstName} {selectedChild.lastName}
                            </h3>

                            <p>{calculateAge(selectedChild.dateOfBirth)}</p>
                        </div>
                    </div>

                    <div className="selected-child-details">
                        <div>
                            <span>Date of Birth</span>
                            <strong>
                                {formatDate(selectedChild.dateOfBirth)}
                            </strong>
                        </div>

                        <div>
                            <span>Sex</span>
                            <strong>{selectedChild.sex}</strong>
                        </div>

                        <div>
                            <span>Caregiver Relationship</span>
                            <strong>{selectedChild.relationship}</strong>
                        </div>
                    </div>

                    <p className="child-profile-information">
                        The health sections below relate to the selected
                        child's profile. Health records will be connected
                        to individual child IDs during backend integration.
                    </p>
                </div>
            )}
        </section>
    );
}

export default ChildProfiles;
