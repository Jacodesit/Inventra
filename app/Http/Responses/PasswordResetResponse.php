<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\PasswordResetResponse as PasswordResetResponseContract;
use Illuminate\Http\RedirectResponse;

class PasswordResetResponse implements PasswordResetResponseContract
{
    /**
     * Handle the password reset response.
     */
    public function toResponse($request): RedirectResponse
    {
        return redirect()->route('welcome')->with('status', 'Password reset successfully!');
    }
}
